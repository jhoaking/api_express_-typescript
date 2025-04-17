import express from "express";

 const router = express.Router();

router.get('/',(_req,res) =>{
    res.send('mostrar toas los diarios')
})

router.post('/',(_req,res) =>{
    res.send('guardando diario')
})  

export default router;