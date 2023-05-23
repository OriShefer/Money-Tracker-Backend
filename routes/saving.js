const { updateSaving, getAllSavings,getLastSavings, addSaving } = require('../controllers/saving');

const router = require('express').Router();


router
    .get('/get-last-savings',getLastSavings)
    .get('/get-all-savings',getAllSavings)
    .post('/add-saving',addSaving)
    .patch('/update-saving',updateSaving)


module.exports = router