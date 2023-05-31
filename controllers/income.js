const { getCurrentDate } = require("../Utils/date");
const TransactionSchema= require("../models/TransactionModel")

exports.getIncomes = async (req,res) => {


    try {
        const incomes = await TransactionSchema.aggregate([
            {
                $match:{type: 'income'}
            }
        ]).sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}


exports.getMonthlyIncomes = async (req,res) => {


    try {
        const incomes = await TransactionSchema.aggregate([ 
            {
                $match:{type: 'income'}
            },
            {
                $match: {
                    $expr: {$and:[
                      {$eq:[{$year:"$date"},{$year:getCurrentDate()}]},
                      {$eq:[{$month:getCurrentDate()},{$month:"$date"}]},  
                    ]}
                }
            }]
          ).sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.getMonthlyIncomesByCategoryAmount = async (req,res) => {

    try {
        const incomes = await TransactionSchema.aggregate([
            {
                $match: {type: "income"}
            },
            {
                $match: {
                    $expr: {$and:[
                      {$eq:[{$year:"$date"},{$year:getCurrentDate()}]},
                      {$eq:[{$month:getCurrentDate()},{$month:"$date"}]},  
                    ]}
                }
            },
                {
                    $group: {_id: "$category", totalQuantity: {$sum: "$amount"}}
                },
                {
                    $sort: {totalQuantity:-1}
                }
        ]).limit(6)
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}