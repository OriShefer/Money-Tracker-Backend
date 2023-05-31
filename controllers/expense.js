const { getCurrentDate } = require("../Utils/date");
const TransactionSchema= require("../models/TransactionModel")

exports.getExpenses = async (req,res) => {
    const array = new Date().toLocaleDateString().split('.')
    const date = new Date(array[2], parseInt(array[1]) - 1, parseInt(array[0]) + 1);

    try {
        const expenses = await TransactionSchema.aggregate([ 
            {
                $match:{type: 'expense'}
            }
            ]
          ).sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.getMonthlyExpenses = async (req,res) => {

    try {
        const expenses = await TransactionSchema.aggregate([ 
            {
                $match:{type: 'expense'}
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
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.getMonthlyExpensesByCategoryAmount = async (req,res) => {

    try {
        const expenses = await TransactionSchema.aggregate([
            {
                $match: {type: "expense"}
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
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}