// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       <h1>hello don</h1>
//     </div>
//   );
// }
'use client';

import Error from 'next/error';

export default function NotFound() {
  return <Error statusCode={404} />;
}