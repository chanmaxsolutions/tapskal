// app/api/submit-form/route.ts
import { NextResponse } from 'next/server';
import { airtableClient, ContactFormSchema, QuoteFormSchema } from '@/lib/airtable';
import { ZodError } from 'zod';

interface ErrorResponse {
    message: string;
    [key: string]: unknown;
}

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
    } catch (error) {
        console.error('Form submission error:', error);

        const errorResponse: ErrorResponse = {
            success: false,
            message: error instanceof Error ? error.message : 'Something went wrong'
        };

        if (error instanceof ZodError) {
            errorResponse.errors = error.errors;
        }

        return NextResponse.json(errorResponse, { status: 400 });
    }
}