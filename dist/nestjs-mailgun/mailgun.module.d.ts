import { ConfigurationMailgun } from './configuration';
import { MailgunService } from './services/relay/mailgun.service';
export declare class MailgunModule {
    static forRoot(config: ConfigurationMailgun): {
        module: typeof MailgunModule;
        providers: (typeof MailgunService | {
            provide: string;
            useValue: string;
        })[];
        exports: (typeof MailgunService)[];
    };
}
