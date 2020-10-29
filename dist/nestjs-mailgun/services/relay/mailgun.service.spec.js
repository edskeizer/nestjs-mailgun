"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const mailgun_service_1 = require("./mailgun.service");
describe('MailgunService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [mailgun_service_1.MailgunService],
        }).compile();
        service = module.get(mailgun_service_1.MailgunService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=mailgun.service.spec.js.map