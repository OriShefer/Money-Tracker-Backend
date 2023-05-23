const CategorySchema= require("../models/CategoryModel")


exports.addCategory= async (req, res) => {
    const {name,type}  = req.body

    const category = CategorySchema({
        name,
        type
    })

    try {
        //validations
        if(!name || !type){
            return res.status(400).json({message: 'All fields are required!'})
        }
        await category.save()
        res.status(200).json({message: 'Category Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(category)
}

exports.getIncomeCategories = async (req, res) => {
    try {
        const incomeCategories = await CategorySchema.find({type: "income"}).sort({createdAt: -1})
        res.status(200).json(incomeCategories)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.getExpenseCategories = async (req, res) => {
    try {
        const expensesCategories = await CategorySchema.find({type: "expense"}).sort({createdAt: -1})
        res.status(200).json(expensesCategories)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}



