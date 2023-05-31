const { getExpenses,getMonthlyExpenses, getMonthlyExpensesByCategoryAmount } = require('../controllers/expense');

const router = require('express').Router();


router
    .get('/get-expenses',getExpenses)
    .get('/get-monthly-expenses',getMonthlyExpenses)
    .get('/get-monthly-expenses-category',getMonthlyExpensesByCategoryAmount)

module.exports = router