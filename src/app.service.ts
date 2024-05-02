import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue('photo_queue') private readonly photoQueue: Queue,
    // private readonly configService: ConfigService, // Inject ConfigService directly
  ) {}
  private currentTask = 0;

  getHello(): string {
    return 'Hello World!';
  }

  async addToQueue(data: any, delay: object): Promise<void> {
    // await this.photoQueue.empty();
    const currentDate = new Date();
    // const redDate = chalk.red(currentDate.toLocaleString())
    this.photoQueue.on('error', (erreur) => {
      console.error(`Erreur dans la file d'attente : ${erreur.message}`);
    });
    // console.log('addToQueue', data)

    // console.log(redDate,"status :",this.photoQueue.clients[0].status)
    // console.log(redDate,"status :",this.photoQueue.clients[0])
    const taskNumber = ++this.currentTask;

    await this.photoQueue.add(`Photo_Job`, {...data, taskNumber},delay);
  }
}
