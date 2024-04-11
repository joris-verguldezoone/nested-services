"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProviders = void 0;
const User_entity_1 = require("../entities/User.entity");
exports.userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(User_entity_1.User),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=User.provider.js.map