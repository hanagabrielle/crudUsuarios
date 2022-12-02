import databaseConfig from '../database/database.js';
import Usuario from '../models/user.model.js';

const models = [
    Usuario
];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = databaseConfig;

        models.map(model => model.init(this.connection));
    }
}
export default new Database();