
import mongoose from "mongoose";

type ConnectionObject ={
    isConnected:number
}

const connection:ConnectionObject={
    isConnected:0
}

async function dbConnect():Promise<void> {
    if(connection.isConnected){
        console.log('already connected')
        return
    }
    try{
        console.log(process.env.DATABASE_URL)
        const db = await mongoose.connect(process.env.DATABASE_URL || '',{})
        connection.isConnected=db.connections[0].readyState
        console.log('db connected')

    }catch(error){
        console.log('failed',error)
        process.exit(1)

    }
    
}
export default dbConnect;