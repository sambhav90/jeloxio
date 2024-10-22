import { type NextRequest } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import Feedback from '../../../../models/Feedback'

export async function GET() {
  await dbConnect()

  const feedback= await Feedback.find({});
   
    return Response.json(feedback)
  }

  export async function POST(request:NextRequest) {
    const body=await request.json()


   
    return Response.json(body)
  }
  export async function UPDATE(request:NextRequest) {
    const body=await request.json()
    

   
    return Response.json(body)
  }

  export async function DELETE(request:NextRequest) {
    const body=await request.json()
    

   
    return Response.json(body)
  }