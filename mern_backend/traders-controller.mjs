import 'dotenv/config';
import express from 'express';
import * as traders from './traders-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.

// CREATE controller ******************************************
app.post ('/traders', (req,res) => { 
    traders.createTraders(
        req.body.symbol, 
        req.body.price, 
        req.body.number,
        req.body.profit,
        req.body.positivity,
        req.body.date
        )
        .then(trader => {
            res.status(201).json(trader);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'create a document failed' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/traders', (req, res) => {
    traders.retrieveTraders()
        .then(trader => { 
            if (trader !== null) {
                res.json(trader);
            } else {
                res.status(404).json({ Error: 'document not found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'retrieve document failed.' });
        });
});


// RETRIEVE by ID controller
app.get('/traders/:id', (req, res) => {
    traders.retrieveTraderByID(req.params.id)
    .then(trader => { 
        if (trader !== null) {
            res.json(trader);
        } else {
            res.status(404).json({ Error: 'document not found' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'retrieve document failed' });
    });

});


// UPDATE controller ************************************
app.put('/traders/:id', (req, res) => {
    traders.updateTrader(
        req.params.id, 
        req.body.symbol, 
        req.body.price, 
        req.body.number,
        req.body.profit,
        req.body.positivity,
        req.body.date
    )
    .then(trader => {
        res.json(trader);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'document update failed' });
    });
});


// DELETE Controller ******************************
app.delete('/traders/:id', (req, res) => {
    traders.deleteTraderById(req.params.id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'document no longer exists' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'delete a document failed' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});