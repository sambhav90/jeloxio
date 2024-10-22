
import mongoose, { Document, Schema } from "mongoose";
export interface IFeedback extends Document{
        name: string
        email: string
        description: string
}


const feedbackSchema:Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
})

const Feedback= mongoose.models.Feedback || mongoose.model<IFeedback>('Feedback',feedbackSchema)

export default Feedback