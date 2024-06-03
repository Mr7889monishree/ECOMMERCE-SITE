const express=require('express')
const router=express.Router()
const {register,postregister,login}=require('../Controller/authController')

router.get('/',register)
router.post('/register',postregister)
router.post('/login', login)
module.exports=router