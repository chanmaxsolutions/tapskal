// lib/airtable.ts
import { z } from 'zod';

// Base types for form fields
export const BaseFormSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    countryCode: z.string(),
    phoneNumber: z.string().min(5, 'Phone number is required'),
});

// Contact form schema
export const ContactFormSchema = BaseFormSchema.extend({
    inquiryType: z.enum(['general', 'support', 'sales', 'partnership'], {
        required_error: 'Please select an inquiry type',
    }),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Quote form schema
export const QuoteFormSchema = BaseFormSchema.extend({
    companyName: z.string().min(2, 'Company name must be at least 2 characters'),
    services: z.array(z.string()).min(1, 'Please select at least one service'),
    budget: z.string({
        required_error: 'Please select a budget range',
    }),
    projectDetails: z.string().min(10, 'Project details must be at least 10 characters'),
});

// Types derived from schemas
export type ContactFormData = z.infer<typeof ContactFormSchema>;
export type QuoteFormData = z.infer<typeof QuoteFormSchema>;

// Airtable client class
class AirtableClient {
    private baseUrl = 'https://api.airtable.com/v0';
    private baseId: string;
    private apiKey: string;

    constructor() {
        const baseId = process.env.AIRTABLE_BASE_ID;
        const apiKey = process.env.AIRTABLE_API_KEY;

        if (!baseId || !apiKey) {
            throw new Error('Missing required Airtable configuration');
        }

        this.baseId = baseId;
        this.apiKey = apiKey;
    }

    private async makeRequest(table: string, data: Record<string, unknown>) {
        const url = `${this.baseUrl}/${this.baseId}/${table}`;

        // Debug logging
        console.log('Airtable Request:', {
            url,
            data,
            table
        });

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    records: [
                        {
                            fields: data,
                        },
                    ],
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Airtable error response:', errorText);
                throw new Error(`Airtable API error: ${response.statusText}. Details: ${errorText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Airtable submission error:', error);
            throw error;
        }
    }

    // Submit contact form data
    async submitContactForm(data: ContactFormData) {
        return this.makeRequest(process.env.AIRTABLE_TABLE_NAME || 'Contact', {
            'Name': data.name,
            'Email': data.email,
            'Country Code': data.countryCode,
            'Phone Number': data.phoneNumber,
            'Type of Inquiry': data.inquiryType,
            'Message': data.message,
        });
    }

    // Submit quote form data
    async submitQuoteForm(data: QuoteFormData) {
        return this.makeRequest('Quotes', {
            'Name': data.name,
            'Email': data.email,
            'Country Code': data.countryCode,
            'Phone Number': data.phoneNumber,
            'Company Name': data.companyName,
            'Services': data.services.join(', '),
            'Budget': data.budget,
            'Project Details': data.projectDetails,
        });
    }
}

// Export a singleton instance
export const airtableClient = new AirtableClient();