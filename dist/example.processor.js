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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleJob = void 0;
const bull_1 = require("@nestjs/bull");
const fs = require("fs/promises");
let ExampleJob = class ExampleJob {
    async handleExampleJob(job) {
        try {
            let buffer = new Uint8Array(Buffer.from(job.data.file.buffer.data));
            await fs.writeFile(job.data.imagePath, buffer);
            console.log('The file has been saved!');
            console.log(`Le fichier ${'toto'} a été enregistré avec succès.`);
        }
        catch (erreur) {
            console.error(`Une erreur s'est produite lors de l'enregistrement du fichier : ${erreur.message}`);
            throw erreur;
        }
    }
};
exports.ExampleJob = ExampleJob;
__decorate([
    (0, bull_1.Process)('Photo_Job'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExampleJob.prototype, "handleExampleJob", null);
exports.ExampleJob = ExampleJob = __decorate([
    (0, bull_1.Processor)('photo_queue')
], ExampleJob);
//# sourceMappingURL=example.processor.js.map