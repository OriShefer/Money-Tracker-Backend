const mongoose = require('mongoose');

const db = async () => {


    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL,{ dbName: 'Transactions'})
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
        console.log(error);
    }
}

module.exports = {db}