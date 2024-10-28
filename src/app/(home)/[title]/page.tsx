import React from 'react'
import axios from 'axios'
async function  Title({ params }: { params: { title: string } }) {
    const resp= await axios.get('http://127.0.0.1:3000/api/blog?title='+params.title)
    console.log(resp.data,"###############")
    
  return (
    <>
        <div>Title - {resp.data[0].title}</div>
        <img src={resp.data[0].urlToImage} alt='img'/>
        <div>{resp.data[0].description}</div>
    </>

  )
}

export default Title