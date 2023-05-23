const { getIncomes, getIncomesByCategoryAmount } = require('../controllers/income');

const router = require('express').Router();


router
    .get('/get-incomes',getIncomes)
    .get('/get-incomes-category',getIncomesByCategoryAmount)

module.exports = router