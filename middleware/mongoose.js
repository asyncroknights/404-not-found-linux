const mongoose  = require('mongoose')

const connectDB = handler =>  async (req, res) => {
    if(mongoose.connections[0].readyState){
        return handler(req, res)
    }
    console.log(process.env.MONGODB_URL)
    await mongoose.connect(process.env.MONGODB_URL)
    return handler(req, res)
}

export default connectDB