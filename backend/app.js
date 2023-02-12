const express = require("express");
const app = express();
const port = 5000;
require("./db/conn")
const Register =require("./model/register.js")
// const Tregister =require("./model/tregister")
app.use(express.json())

app.post('/register', async (req, res) => {
    const { name, classs, rollno, email, password } = req.body;
    
    if (!name || !classs || !rollno || !email|| !password) {
        return res.status(422).json({ error: "plzz fill all the fields properly" });
    }
    try {
        const emailExist = await Register.findOne({ email: email })
        if (emailExist) {
            return res.status(422).json({ error: "Email already exist" });
        }
        else{
            const register = new Register({ name: name, classs: classs, rollno: rollno, email: email, password: password })
            const userRegister = await register.save();
            res.status(201).json({message:"user register successfull"})
        }
        // if (userRegister) {
        //     res.status(201).json({ message: "user register successfully" });
        // }

    } catch (err) {
        console.log(err);
    }
});
// comparing login details with registration details
app.post('/signin',async (req,res)=>{
    const {email,password}=req.body;
    // console.log(req.body); 
    try {
        if(!email||!password){
            return res.status(400).json({error:"plz fill correct details"})
        }
        const register= await Register.findOne({email:email})
        console.log(register);
        
        if(register){
            if(register.password === password){
                res.status(201).json({message:"user login successfull"})
            }
            else{
                return res.status(400).json({error:"details invalid"})
            }
        }
        else{
            return res.status(400).json({error:"plz fill correct email"})
        }
        
    } catch (error) {
        console.log(error);
        
    }
})



app.get('/',(req,res)=>{ 
    res.status(200).send("hyy")
})



app.listen(port, () => {
    console.log(`this is my port ${port}`);

})









// app.post('/login', async (req, res) => {
//     const {email,password,} = req.body;
//     if (!email ||!password ) {
//         return res.status(422).json({ error: "plzz fill all the fields properly" });
//     }
//     try {
//         const useremail = await Adduser.findOne({email:email});
//         if (!useremail) {
//             res.status(201).json({ message: "This mail is not registered" });
//         }
//         const isMatch = await bcrypt.compare(password, useremail.password);
//         console.log(password);
//         console.log(useremail.password);
//         if(isMatch){
//             res.status(201).render("home");
//         }else {
//             res.send("details not valid")
//         }
//     } catch (err) {
//         console.log(err);
//     }
// });