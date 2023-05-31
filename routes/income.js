const { getIncomes,getMonthlyIncomes, getMonthlyIncomesByCategoryAmount } = require('../controllers/income');

const router = require('express').Router();


router
    .get('/get-incomes',getIncomes)
    .get('/get-monthly-incomes',getMonthlyIncomes)
    .get('/get-monthly-incomes-category',getMonthlyIncomesByCategoryAmount)

module.exports = router