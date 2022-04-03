import User from "../../models/User"
import connectDB from "../../middleware/mongoose"


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
        let newuser = await User.create({name: `${name}`, email: `${email}`, password: `${password}`})
        res.status(200).json({id: newuser._id, name: newuser.name, email: newuser.email})
    }
}

export default connectDB(handler)