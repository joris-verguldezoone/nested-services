/// <reference types="multer" />
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    uploadImages(files: Array<Express.Multer.File>): Promise<"L'extension du fichier n'est pas valide." | "Aucun fichier envoyé" | "Images scheduled for processing">;
}
