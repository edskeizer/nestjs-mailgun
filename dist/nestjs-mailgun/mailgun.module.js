"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MailgunModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mailgun_service_1 = require("./services/relay/mailgun.service");
const tokens_1 = require("./tokens/tokens");
let MailgunModule = MailgunModule_1 = class MailgunModule {
    static forRoot(config) {
        return {
            module: MailgunModule_1,
            providers: [
                { provide: tokens_1.API_KEY, useValue: config.API_KEY },
                {
                    provide: tokens_1.PUBLIC_API_KEY,
                    useValue: config.PUBLIC_API_KEY ? config.PUBLIC_API_KEY : '',
                },
                { provide: tokens_1.DOMAIN, useValue: config.DOMAIN },
                { provide: tokens_1.HOST, useValue: config.HOST ? config.HOST : 'api.mailgun.net' },
                mailgun_service_1.MailgunService,
            ],
            exports: [mailgun_service_1.MailgunService],
        };
    }
};
MailgunModule = MailgunModule_1 = __decorate([
    common_1.Module({})
], MailgunModule);
exports.MailgunModule = MailgunModule;
//# sourceMappingURL=mailgun.module.js.map