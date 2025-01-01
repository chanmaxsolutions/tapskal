// app/api/submit-form/route.ts
import { NextResponse } from 'next/server';
import { airtableClient, ContactFormSchema, QuoteFormSchema } from '@/lib/airtable';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { formType, ...formData } = body;

        // Validate and submit based on form type
        if (formType === 'contact') {
            const validatedData = ContactFormSchema.parse(formData);
            await airtableClient.submitContactForm(validatedData);
        } else if (formType === 'quote') {
            const validatedData = QuoteFormSchema.parse(formData);
            await airtableClient.submitQuoteForm(validatedData);
        } else {
            throw new Error('Invalid form type');
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Form submission error:', error);

        return NextResponse.json(
            {
                success: false,
                error: error.message || 'Something went wrong'
            },
            { status: 400 }
        );
    }
}