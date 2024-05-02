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
exports.AppService = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    constructor(photoQueue) {
        this.photoQueue = photoQueue;
        this.currentTask = 0;
    }
    getHello() {
        return 'Hello World!';
    }
    async addToQueue(data, delay) {
        const currentDate = new Date();
        this.photoQueue.on('error', (erreur) => {
            console.error(`Erreur dans la file d'attente : ${erreur.message}`);
        });
        const taskNumber = ++this.currentTask;
        await this.photoQueue.add(`Photo_Job`, { ...data, taskNumber }, delay);
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, bull_1.InjectQueue)('photo_queue')),
    __metadata("design:paramtypes", [Object])
], AppService);
//# sourceMappingURL=app.service.js.map