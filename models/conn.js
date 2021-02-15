const host = 'ziggy.db.elephantsql.com',
    database = 'yunigsmr',
    user = 'yunigsmr',
    password = 'HHUwX8oGb6jl8MwIqvYRaLOtuGyUpaHe';

const pgp = require('pg-promise')({
    query: function (event) {
        console.log('QUERY:', event.query);
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password
  };

const db = pgp(options);

module.exports = db;