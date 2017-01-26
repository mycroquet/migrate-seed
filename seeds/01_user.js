const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 3;')
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('user').insert({
                    id: 1,
                    name: 'Michael',
                    email: 'mikeroque1@gmail.com',
                    password: bcrypt.hashSync('bacon', 10)
                }),
                knex('user').insert({
                    id: 2,
                    name: 'Bob',
                    email: 'bob@galvanize.com',
                    password: bcrypt.hashSync('bobsburgers', 10)
                })
            ]);
        });
};
