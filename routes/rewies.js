const express = require('express')
const Reviews = require('../models/Reviews')

const router = express.Router()

router.get('/', async (req, res)=>{
    try{
        const reviews = await Reviews.find()
        res.status(200).json(reviews)
    } catch(err){
        res.json({message: err})
    }
})

router.post('/', async (req, res)=>{
    const review = new Reviews({
        body: req.body.body
    })

    try{
        const savedReview = await review.save()
        res.json(savedReview)
    } catch(err){
        res.json({message: err})
    }
})

module.exports = router