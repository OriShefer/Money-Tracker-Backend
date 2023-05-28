const TransactionSchema= require("../models/TransactionModel")

exports.getExpenses = async (req,res) => {

    try {
        const expenses = await TransactionSchema.aggregate([ 
            {
                $match:{type: 'expense'}
            },
            {
                $match: {
                    $expr: {$and:[
                      {$eq:[{$year:"$date"},{$year:new Date()}]},
                      {$eq:[{$month:new Date()},{$month:"$date"}]},  
                    ]}
                }
            }]
          ).sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.getExpensesByCategoryAmount = async (req,res) => {

    try {
        const expenses = await TransactionSchema.aggregate([
            {
                $match: {type: "expense"}
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