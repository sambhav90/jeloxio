import { type NextRequest } from 'next/server'
import {data} from '@/lib/data'


export async function GET(request:NextRequest) {
  const { searchParams } = new URL(request.url);
  const title=searchParams.get("title")
  console.log(title);
    if(title){
      const resp = data.filter((dt:any)=>(dt.title==title))
      return Response.json(resp)
    }else{
      return Response.json(data)
    }
   
    
  }





  export async function POST(request:NextRequest) {
    const body=await request.json()
    return Response.json(body)
  }
