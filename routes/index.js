var express = require('express');
var router = express.Router();
var knex = require('../db/db_connection');


/* GET home page. */

router.get('/', function(req, res) {
    req.app.locals.title = 'All Orders'
    knex('order')
        .select()
        .then(function(order) {
            res.json(order)
        })
})

/* Create order */
router.post('/create', function(req, res) {
    var subTotal = req.body.quantity * req.body.price

    knex('order')
        .insert({
            product_name: req.body.product_name,
            quantity: req.body.quantity,
            price: req.body.price,
            total: subTotal
        })
        .returning('id')
        .then(function(data) {
            res.redirect('/' + data)
        });
})

/* GET Order page */
router.get('/:id', function(req, res) {
    knex('order')
        .where('id', req.params.id)
        .first()
        .then(function(order) {
            req.app.locals.title = order.title
            res.json(order)
        })
})

/* Update Order */

router.post('/update/:id', function(req, res) {
    var subTotal = req.body.quantity * req.body.price

    knex('order')
        .where('id', req.params.id)
        .update({
            product_name: req.body.product_name,
            quantity: req.body.quantity,
            price: req.body.price,
            total: subTotal,
            user_id: req.body.user_id
        })
        .then(function(data) {
            res.redirect('/' + req.params.id)
        });
})

/* Delete Order */
router.delete('/:id', function(req, res) {
    knex('order')
        .del()
        .where('id', req.params.id)
        .then(function() {
            res.redirect('/')
        })
})


module.exports = router;
