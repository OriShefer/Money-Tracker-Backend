const { addCategory, getIncomeCategories, getExpenseCategories } = require('../controllers/category');

const router = require('express').Router();


router
    .get('/get-income-categories', getIncomeCategories)
    .get('/get-expense-categories', getExpenseCategories)
    .post('/add-category', addCategory)

    
module.exports = router