import Database from './DbServices';

const DB_EXEC = Database.getConnection();

export const getAulas = async () => {
    let results = await DB_EXEC(`select * from aulas`);

    return results.rows._array;
};

export const insertAulas = async (param) => {
    let results = await DB_EXEC(
        `insert into aulas(data, hora, descricao, qtd) values(?,?,?,?)`,
        [param.data, param.hora, param.descricao, param.qtd],
    );

    console.log(results);
    return results.rowsAffected;
};
