import Link from "next/link";

export default function Herosection({resp}:any) {
    return (
      <>
      <div className="herosection-bg flex justify-center my-8">
        <div className="flex flex-col w-[1280px] mx-4">
          <div className="text-2xl font-semibold text-white mb-2">
            <h3 className=" capitalize text-black">I Give you news short and clarification </h3>
          </div>
          <div>
            <table className="border border-[#BCBCBC] border-collapse w-full">
            {/* <thead>
                <tr className="border border-[#BCBCBC]">
                <th className="border border-[#BCBCBC] text-xl text-black text-center py-2">Posts</th> 
                </tr>
            </thead> */}
            <tbody>
            {
                resp.map((item:any, i:any)=>{
                    return(
                    <tr key={i} className={`${i%2 == 1?"bg-slate-100":""}`}>
                        <td className="w-[40px] text-xl text-center py-2 border border-[#BCBCBC]">{i}</td>
                        <Link href={"/"+item.title}>
                        <td className="text-black text-xl py-2 pl-4 border border-[#BCBCBC]">{item.title}</td>
                        </Link>
                    </tr>
                    )
                })
            }
            </tbody>
            </table>
          </div>
        </div>
      </div>
      </>
    );
  }

//   <div className="herosection-bg flex justify-center h-[800px]">
//         <div className="flex flex-col w-[1280px]">
//           <div className="text-2xl font-semibold text-white">
//             <h3 className=" capitalize text-black">I Give you news short and clarification </h3>
//           </div>
//           <div>
//             <table className="table-fixed">
                
//             <tbody>
//             {
//                 [0,1,2,3,4,5,6,7,8,9].map((item, i)=>{
//                     return(
//                         <tr key={i}>
//                         <td className="text-black text-base">this is latest News</td>
//                     </tr>
//                     )
//                 })
//             }
//             </tbody>
//             </table>
//           </div>
//         </div>
//       </div>