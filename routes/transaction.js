const { addTransaction, getTransactions, deleteTransaction,deleteAllTransaction, getLastTransactions } = require('../controllers/transaction');

const router = require('express').Router();


router
    .get('/get-transactions', getTransactions)
    .get('/get-last-transactions',getLastTransactions)
    .post('/add-transaction', addTransaction)
    .delete('/delete-transaction/:id', deleteTransaction)
    .delete('/delete-all-transactions',deleteAllTransaction)

module.exports = router