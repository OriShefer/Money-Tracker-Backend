const SavingSchema= require("../models/SavingModel")

exports.addSaving = async (req, res) => {
    const {name ,currentAmount, destinationAmount}  = req.body

    const saving = SavingSchema({
        name,
        currentAmount,
        destinationAmount
    })

    try {
        //validations
        if(!name || !currentAmount || !destinationAmount){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(currentAmount <= 0 || !currentAmount === 'number' || destinationAmount <= 0 || !destinationAmount === 'number'){
            return res.status(400).json({message: 'Amounts must be positive numbers!'})
        }
        await saving.save()
        res.status(200).json({message: 'Saving Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(saving)
}

exports.updateSaving = async (req, res) => {
    const {name ,currentAmount, destinationAmount}  = req.body

    const saving = SavingSchema({
        name,
        currentAmount,
        destinationAmount
    })

    try {
        //validations
        if(!name || !currentAmount || !destinationAmount){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(currentAmount <= 0 || !currentAmount === 'number' || destinationAmount <= 0 || !destinationAmount === 'number'){
            return res.status(400).json({message: 'Amounts must be positive numbers!'})
        }
        await SavingSchema.findOneAndUpdate({name: name}, req.body)
        res.status(200).json({message: 'Saving Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

}

exports.getLastSavings = async (req, res) => {
    try {
        const savings = await SavingSchema.find().sort({createdAt: -1}).limit(2)
        res.status(200).json(savings)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.getAllSavings = async (req, res) => {
    try {
        const savings = await SavingSchema.find().sort({createdAt: -1})
        res.status(200).json(savings)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}


