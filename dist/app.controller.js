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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async uploadImages(files) {
        if (files != undefined) {
            let imageNumber = 0;
            for (const file of files) {
                const regEx = /^.*\.(jpg|jpeg|png|gif|pdf|svg)$/i;
                const fileName = file.originalname.slice(0, -4);
                const fileExt = file.originalname.slice(-4);
                if (regEx.test(file.originalname)) {
                    imageNumber++;
                    const data = {
                        message: 'This image have been processed by the photo_queue !',
                        imagePath: './uploads/' + fileName + '-' + imageNumber + fileExt,
                        file: file
                    };
                    console.log(data, "data");
                    await this.appService.addToQueue(data, { delay: 3000 });
                    await new Promise(resolve => setTimeout(resolve, 7000));
                }
                else {
                    return 'L\'extension du fichier n\'est pas valide.';
                }
            }
        }
        else {
            return 'Aucun fichier envoyé';
        }
        return 'Images scheduled for processing';
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)('schedule-image-saving'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images', 10, {})),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "uploadImages", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map