import {createPool} from 'mysql2/promise';
const environment = require('./core/environment');

export async function connect(){
    const connection = await createPool(environment.connParameters);
    return connection;
};

