// example.job.ts
import { Process, Processor } from '@nestjs/bull';
import * as fs from 'fs/promises'; // Pour les opérations asynchrones de système de fichiers
import * as path from 'path';

@Processor('photo_queue')
export class ExampleJob {
  @Process('Photo_Job')
  async handleExampleJob(job: any): Promise<void> {

        try {
          let buffer = new Uint8Array(Buffer.from(job.data.file.buffer.data)); 
          // nodeJS official conversion
          // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
          await fs.writeFile(job.data.imagePath, buffer)
            console.log('The file has been saved!');
          console.log(`Le fichier ${'toto'} a été enregistré avec succès.`);
        } catch (erreur) {
          console.error(`Une erreur s'est produite lors de l'enregistrement du fichier : ${erreur.message}`);
          throw erreur;
        }

   
  }
}

