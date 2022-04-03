import User from "../../models/User"
import connectDB from "../../middleware/mongoose"
import bcrypt from 'bcrypt'

const handler = async(req, res) => {
    if(req.method != 'POST'){
        res.status(400).json({error: "Bad request"})
    }
    const queries = {
        name: req.body.name[0],
        email: req.body.email[0],
        password: req.body.password[0]
    }
    const {name, email, password} = queries
    let user = await User.findOne({email: `${email}`})
    if(user!=null){
        res.status(400).json({error: "User exists"})
    }else{
        try{
            const salt = await bcrypt.genSalt()
            const hashedPassword = await bcrypt.hash(password, salt)
            let newuser = await User.create({name: `${name}`, email: `${email}`, password: `${hashedPassword}`})
            res.status(200).json({id: newuser._id, name: newuser.name, email: newuser.email})
        }catch{res.status(500).send()}
    }
}

export default connectDB(handler)