"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const tokens_1 = require("../../tokens/tokens");
const mailgunConfig = require("mailgun-js");
let MailgunService = class MailgunService {
    constructor(apiKey, domain, publicApiKey, url) {
        this.apiKey = apiKey;
        this.domain = domain;
        this.publicApiKey = publicApiKey;
        this.url = url;
        this.mailgun = mailgunConfig({ apiKey, domain, publicApiKey, url });
    }
    sendEmail(emailOptions) {
        return new Promise((resolve, reject) => {
            this.mailgun.messages().send(emailOptions, (error, body) => {
                if (error) {
                    return reject(error);
                }
                return resolve(body);
            });
        });
    }
    validateEmail(email) {
        return new Promise((resolve, reject) => {
            this.mailgun.validate(email, (err, body) => {
                if (body && body.is_valid) {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
                if (err) {
                    console.log('ERRRP', err);
                    reject(err);
                }
            });
        });
    }
};
MailgunService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(tokens_1.API_KEY)),
    __param(1, common_1.Inject(tokens_1.DOMAIN)),
    __param(2, common_1.Inject(tokens_1.PUBLIC_API_KEY)),
    __param(3, common_1.Inject(tokens_1.URL)),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], MailgunService);
exports.MailgunService = MailgunService;
//# sourceMappingURL=mailgun.service.js.map