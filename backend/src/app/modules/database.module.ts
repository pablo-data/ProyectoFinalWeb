import { createPool } from 'mysql2/promise';

async function connect(){
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        database: 'bd_solicitudes',
        password: 'hola123',
        connectionLimit: 10
    });

    return connection;
}

export default { connect } 