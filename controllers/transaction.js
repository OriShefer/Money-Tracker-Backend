const TransactionSchema= require("../models/TransactionModel")

exports.addTransaction = async (req, res) => {
    const {type ,title, amount, date, category, description}  = req.body

    const transaction = TransactionSchema({
        type,
        title,
        amount,
        date: new Date(date),
        category,
        description
    })

    try {
        //validations
        if(!type || !title || !amount || !date || !category){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(!amount === 'number'){
            return res.status(400).json({message: 'Amount must be a number!'})
        }
        await transaction.save()
        res.status(200).json({message: 'Transaction Added'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Server Error'})
    }

    console.log(transaction)
}

exports.getTransactions = async (req, res) =>{
    try {
        const transactions = await TransactionSchema.find().sort({createdAt: -1})
        res.status(200).json(transactions)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.getLastTransactions = async (req, res) =>{
    try {
        const transactions = await TransactionSchema.find().sort({createdAt: -1}).limit(5)
        res.status(200).json(transactions)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}



exports.deleteTransaction = async (req, res) =>{
    const {id} = req.params;
    await TransactionSchema.findByIdAndDelete(id)
        .then(() =>{
            res.status(200).json({message: 'Transaction Deleted'})
        })
        .catch(() =>{
            res.status(500).json({message: 'Server Error'})
        })
}

exports.deleteAllTransaction = async (req, res) =>{
    await TransactionSchema.deleteMany()
        .then(() =>{
            res.status(200).json({message: 'Transactions Deleted'})
        })
        .catch(() =>{
            res.status(500).json({message: 'Server Error'})
        })
}

