import User from "../../models/User"
import connectDB from "../../middleware/mongoose"

const handler = async(req, res) => {
    if(req.method != 'GET'){
        return
    }
    const queries = {
        email: JSON.parse(req.query.formData).email[0],
        password: JSON.parse(req.query.formData).password[0]
    }
    
    const {email, password} = queries
    let user = await User.findOne({email: `${email}`})
    if(user!=null){
        if(password==user.password){
            res.status(200).json({id: user._id, name: user.name, email: user.email})
        }else{
            res.status(404).json({error: "Invalid login details"})
        }
    }else{
        res.status(404).json({error: "User does not exist"})
    }
}

export default connectDB(handler)