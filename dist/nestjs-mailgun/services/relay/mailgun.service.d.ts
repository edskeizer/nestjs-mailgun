export interface EmailOptions {
    from: string;
    to: string | string[];
    subject: string;
    text?: string;
    html?: string;
    attachment?: any;
    'recipient-variables'?: {
        [email: string]: any;
    };
}
export declare class MailgunService {
    private readonly apiKey;
    private readonly domain;
    private readonly publicApiKey;
    private readonly url;
    private readonly mailgun;
    constructor(apiKey: any, domain: any, publicApiKey: any, url: any);
    sendEmail(emailOptions: EmailOptions): Promise<boolean>;
    validateEmail(email: string): Promise<boolean>;
}
