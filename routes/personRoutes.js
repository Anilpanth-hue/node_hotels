const express = require('express');
const router = express.Router();
const Person = require('./../models/Person')

//using post method, we can post any json code
router.post('/', async (req,res) => {
  
    try{
      
      const data = req.body
      
      const newPerson = new Person(data);
      
      const response = await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
      
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internel Server Error'})
      
    }
    
  })

  // Get method to get the person
  router.get('/', async (req,res)=> {
    try{
      const data = await Person.find();
      console.log('data fetched success');
      res.status(200).json(data);
      
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internel Server Error'})
      
    }
  })

//using get method, we can access any json code
  router.get('/:workType', async (req,res) => {

    try{
      const workType = req.params.workType;
      if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
        const response = await Person.find({work: workType});
        console.log('response fetched');
        res.status(200).json(response);
  }
  else{
    res.status(404).json({error: 'Invalid workType'});
  }

    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internel Server Error'});
    }

})

// we can make any update in postman in any json code using its ID
router.put('/:id', async (req, res) => {
  try{
    const personId = req.params.id;
    const updatedPersonData = req.body;

    const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
      new: true,
      runValidators: true,
    })

    if(!response){
      return res.status(404).json({error: 'person not found'});
    }

    console.log('data updated');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internel Server Error'});
  }
})

//We can delete json code from postman using this delete code
router.delete('/:id', async (req, res) => {
  try{
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);

    if(!response){
      return res.status(404).json({error: 'person not found'});
    }

    console.log('data Deleted');
    res.status(200).json({ error: 'persone Deleted successfully'});

  }
  catch(err){ 
    console.log(err);
    res.status(500).json({message: 'Internel Server Error'});
  }
})

module.exports = router;