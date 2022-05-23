import * as SQLite from 'expo-sqlite';

const Database = {
    getConnection: () => {
        const db = SQLite.openDatabase('new.db');
        db.transaction((tx) => {
            tx.executeSql(
                `create table if not exists token (id integer primary key not null, token text not null, nome text not null, email text not null, nascimento text not null, endereco text not null, desde text not null, rule text not null, user_id text not null);`,
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
