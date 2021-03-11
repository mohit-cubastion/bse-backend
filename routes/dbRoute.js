const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bseSchema = require('../models/bseSchema')
 
let toalDataLength;

router.get('/:id', async(req,res)=>{
    try {
        let id = req.params.id;
        console.log(id) 
        if(id == 1){
            let totalData = await bseSchema.find();
            let data = await bseSchema.find().limit(id*10);
            
             toalDataLength = totalData.length;
             if(data){
                res.status(200).send({
                    "status_code": '2000',
                    "status_msg": "Data Fetched Successfuly",
                    "data": data,
                    "length": toalDataLength
                });
            }
        }else{
            let data = await bseSchema.find().limit(10).skip((id-1)*10);
        if(data){
            res.status(200).send({
                "status_code": '2000',
                "status_msg": "Data Fetched Successfuly",
                "data": data,
                "length": toalDataLength
            });
        }
        }
        
    } catch (error) {
        console.log(error, 'eee')
    }
    
})



router.post('/addRecord', async (req,res)=>{

    try {
        console.log(req.body)
        let response = await addRecord(req);
        res.send({
            "status_code" : "1005",
            "status_msg": "Record Added Successfully"
            
        })
    } catch (error) {
        res.send(error);
    }
    
})


const addRecord = async(req)=>{
    const {Open, Close} = req.body;
    let postObj = {}
    postObj["Open"] = Open;
    postObj["Close"] = Close;
    postObj["Date"] = req.body['Date'];
    let record = new bseSchema(postObj);
            await record.save();
            return record
}

module.exports = router;