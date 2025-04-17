import express  from "express";
import toNewDiaryEntry from "../utils";
import * as diariServices from '../services/diari'

 const router = express.Router();

router.get('/',(_req,res  ) =>{
     res.send(diariServices.getEntryConInfoSensible())
})

router.get('/:id', (req , res)  => {
    const diary = diariServices.findById(+req.params.id); 
    if (!diary) {
          res.sendStatus(404); 
          return;
    }
      res.send(diary);
});

router.post('/',(req,res) =>{
    try {

        const newDiary = toNewDiaryEntry(req.body);

        const addedDiaryEntry = diariServices.addDiary(newDiary)
        res.json(addedDiaryEntry)
    } catch (error) {
        res.status(400).send(error)
    }
   
})  

export default router;