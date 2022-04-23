import * as SQLite from 'expo-sqlite';

const Database = {
    getConnection: () => {
        const db = SQLite.openDatabase('crossfitme.db');
        db.transaction((tx) => {
            tx.executeSql(
                'create table if not exists aulas (id integer primary key not null, data text not null, hora text not null, descricao text not null, qtd text not null);',
            );
        });

        const ExecuteQuery = (sql, params = []) =>
            new Promise((resolve, reject) => {
                db.transaction((trans) => {
                    trans.executeSql(
                        sql,
                        params,
                        (trans, results) => {
                            resolve(results);
                        },
                        (error) => {
                            reject(error);
                        },
                    );
                });
            });
        return ExecuteQuery;
    },
};

export default Database;
