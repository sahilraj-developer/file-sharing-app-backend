import mongoose from 'mongoose'
const DBConecction =async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
            console.log("database connected successfully");
        
    }catch(error){
        console.log(`error:-${error}`)
    }
}


export default DBConecction;