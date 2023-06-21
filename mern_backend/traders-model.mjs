// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB Traders collection using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const traderSchema = mongoose.Schema({
	symbol:    { type: String, required: true },
	price:     { type: Number, required: true },
    number: { type: Number, required: true },
    profit: { type: Number, required: true },
	positivity: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now }
});

// Compile the model from the schema.
const Trader = mongoose.model('Trader', traderSchema);


// CREATE model *****************************************
const createTraders = async (symbol, price, number, profit, positivity, date) => {
    const trader = new Trader({ 
        symbol: symbol, 
        price: price, 
        number: number,
        profit: profit,
        positivity: positivity,
        date: date 
    });
    return trader.save();
}


// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const retrieveTraders = async () => {
    const query = Trader.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveTraderByID = async (_id) => {
    const query = Trader.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteTraderById = async (_id) => {
    const result = await Trader.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateTrader = async (_id, symbol, price, number, profit, positivity, date) => {
    const result = await Trader.replaceOne({_id: _id }, {
        symbol: symbol,
        price: price,
        number: number,
        profit: profit,
        positivity: positivity,
        date: date
    });
    return { 
        _id: _id, 
        symbol: symbol,
        price: price,
        number: number,
        profit: profit,
        positivity: positivity,
        date: date
    }
}



// Export our variables for use in the controller file.
export { createTraders, retrieveTraders, retrieveTraderByID, updateTrader, deleteTraderById }