import React from 'react'
import axios from 'axios'
async function  Title({ params }: { params: { title: string } }) {
    const resp= await axios.get('http://127.0.0.1:3000/api/blog?title='+params.title)
    console.log(resp.data,"###############")
    
  return (
    <>
      <div className='flex justify-center'>
      <div className='relative md:space-y-[32px] space-y-[16px] md:pt-[96px] pt-[30px] md:pb-[112px] pb-[30px] w-[1280px] mx-4'>
            {/* <div>Title - {resp?.data[0]?.title || 'No title available'}</div>
              <img src={resp?.data[0]?.urlToImage || 'No image available'} alt='No image available'/>
              <div>{resp?.data[0]?.description || 'No description available'}</div> */}
              {resp?.data?.[0] ? (
              <>
                <div>Title - {resp.data[0].title || 'No title available'}</div>
                <img
                  src={resp.data[0].urlToImage || 'fallback-image.jpg'}
                  alt='img'
                  // onError={(e) => { e.target.src = 'fallback-image.jpg'; }}
                />
                <div>{resp.data[0].description || 'No description available'}</div>
              </>
            ) : (
              <div>No data available check another post</div>
            )}

       </div>
      </div>
    </>

  )
}

export default Title