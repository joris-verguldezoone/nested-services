import { Queue } from 'bull';
export declare class AppService {
    private readonly photoQueue;
    constructor(photoQueue: Queue);
    private currentTask;
    getHello(): string;
    addToQueue(data: any, delay: object): Promise<void>;
}
