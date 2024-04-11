import { User } from '../entities/User.entity';
import { Repository } from 'typeorm';
export declare class SeedServices {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createRandomUsers(): Promise<void>;
}
