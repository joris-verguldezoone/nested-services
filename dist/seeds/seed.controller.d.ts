import { SeedServices } from './seed.services';
export declare class SeedController {
    private readonly seedServices;
    constructor(seedServices: SeedServices);
    createUser(): Promise<void>;
}
