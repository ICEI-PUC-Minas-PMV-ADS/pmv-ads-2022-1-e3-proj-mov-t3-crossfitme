import Database from './SQLite_Auth.js';

const DB_EXEC = Database.getConnection();

export const getToken = async () => {
    let results = await DB_EXEC(`select * from token`);
    console.log(results.rows._array[0]);
    return results.rows._array[0];
};

export const insertToken = async (param) => {
    let results = await DB_EXEC(
        `insert into token(token,nome,email,nascimento,endereco,desde,rule,user_id) values(?,?,?,?,?,?,?,?);`,
        [
            param.accessToken,
            param.user.name,
            param.user.email,
            param.user.nascimento,
            param.user.endereco,
            param.user.desde,
            param.user.rule,
            param.user.id,
        ],
    );
    console.log(results);
    return results.rowsAffected;
};

export const dropToken = async () => {
    let results = await DB_EXEC(`delete from token`);
    return results.rowsAffected;
};
