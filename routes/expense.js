const { getExpenses, getExpensesByCategoryAmount } = require('../controllers/expense');

const router = require('express').Router();


router
    .get('/get-expenses',getExpenses)
    .get('/get-expenses-category',getExpensesByCategoryAmount)

module.exports = router