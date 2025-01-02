// utils/gtm.ts
declare global {
    interface Window {
        dataLayer: any[];
    }
}

export const pushEvent = (event: Record<string, any>): void => {
    if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(event);
    }
}