
import Herosection from "@/components/Herosection";
import axios from 'axios'



export default async function Home() {

    const resp= await axios.get('http://127.0.0.1:3000/api/blog')
    console.log(resp,"###############")

    return (
      <div className="">
       <Herosection  resp={resp.data}/>
      </div>
    );
  }