import { Controller, Get, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('seedUser')
  // getHello() {
  //   return this.seedService.createRandomUsers();
  // }
  @Post('schedule-image-saving')
  @UseInterceptors(FilesInterceptor('images', 10 ,{
  }))
  async uploadImages(@UploadedFiles() files: Array<Express.Multer.File>) {
    if(files != undefined){
      let imageNumber = 0; // facultatif
      for(const file of files) {
        
        const regEx = /^.*\.(jpg|jpeg|png|gif|pdf|svg)$/i;
        const fileName =  file.originalname.slice(0 ,-4); // j'enleve l'extension
    
        const fileExt = file.originalname.slice(-4) // ex: fileName.png '.png'

        // console.log(fileExt, fileName,'toto')
        if (regEx.test(file.originalname)) {

          imageNumber++
          const data = {
            message: 'This image have been processed by the photo_queue !',
            imagePath: './uploads/'+ fileName + '-'+ imageNumber + fileExt, 
            file: file
          };
          console.log(data,"data")
          await this.appService.addToQueue(data, { delay: 3000 }); // delais de traitement du job 
          await new Promise(resolve => setTimeout(resolve, 7000)) // ajout du job a la queue
        } else {
          return 'L\'extension du fichier n\'est pas valide.';
        }
      } 
    }
    else{
      return 'Aucun fichier envoyé'
    }
  
    return 'Images scheduled for processing';
  }
}
