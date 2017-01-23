exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "order"; ALTER SEQUENCE order_id_seq RESTART WITH 6;')
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('order').insert({
                    id: 1,
                    product_name: 'Cheese',
                    quantity: 3,
                    price: 2,
                    total: 6,
                    user_id: 1
                }),
                knex('order').insert({
                  id: 2,
                  product_name: 'Beer',
                  quantity: 12,
                  price: 3,
                  total: 36,
                  user_id: 1
                }),
                knex('order').insert({
                  id: 3,
                  product_name: 'Oranges',
                  quantity: 3,
                  price: 1,
                  total: 3,
                  user_id: 2
                }),
                knex('order').insert({
                  id: 4,
                  product_name: 'Pizza',
                  quantity: 4,
                  price: 10,
                  total: 40,
                  user_id: 2
                }),
                knex('order').insert({
                  id: 5,
                  product_name: 'Bacon',
                  quantity: 100,
                  price: 1,
                  total: 100,
                  user_id: 1
                })
            ]);
        });
};
