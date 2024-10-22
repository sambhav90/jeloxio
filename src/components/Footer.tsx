import Link from "next/link"
export default function Navigation() {
  return (
    <div className="footer-bg flex justify-center">
      <div className="md:my-16 my-8 w-[1280px] md:space-y-16 space-y-8 mx-4">
        <div className="text-2xl font-semibold text-white">
          <h3>Jeloxio</h3>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-8 mb-16">
          <div >
            <h6 className="text-white text-xl mb-4">Quick Link</h6>
            <hr className="mb-4 w-4/5"/>
            <ul className="text-white text-base space-y-2">
              <li><Link href="/aboutus">About Us</Link></li>
              <li><Link href="/contactus">Contact Us</Link></li>
              <li><Link href="/privacypolicy">Privacy Policy</Link></li>
              <li><Link href="/termandcondition">Terms And Conditions</Link></li>
            </ul>
          </div>
          <div >
            <h6 className="text-white text-xl mb-4">Website And Blog</h6>
            <hr className="mb-4 w-4/5"/>
            <ul className="text-white text-base space-y-2">
              <li><Link href="https://vkagrofarm.blogspot.com/" target="_blank">VK Agro Farm</Link></li>
              <li><Link href="https://headlineshunt.com/" target="_blank">Headliens Hunt</Link></li>
              <li><Link href="https://zekardo.com/" target="_blank">Zekardo</Link></li>
            </ul>
          </div>
          <div >
            <h6 className="text-white text-xl mb-4">We Support Youtube</h6>
            <hr className="mb-4 w-4/5"/>
            <ul className="text-white text-base space-y-2">
              <li><Link href="https://www.youtube.com/@s4sambhav/" target="_blank">S4 Sambhav</Link></li>
              <li><Link href="https://www.youtube.com/@headlineshunt/" target="_blank">Headliens Hunt</Link></li>
              <li><Link href="https://www.youtube.com/@rvgvlogsandfitness5909/" target="_blank">RVG Vlogs</Link></li>
            </ul>
          </div>
          <div >
            <h6 className="text-white text-xl mb-4">Submit Your Query</h6>
            <hr className="mb-4 w-4/5"/>
            <p className="text-white text-base space-y-2 leading-[30px]">
              Suggest What You Want To Know About And We Will Solve It
            </p>
            <div className="flex flex-col space-y-4 mt-4">
            <input type="text" placeholder="Please Give Suggestion" className="px-2 py-1 rounded"/>
            <button type="button" className="text-black text-base font-semibold bg-white px-2 py-1 rounded">Submit</button>
            </div>
          </div>
        </div>
        <div className="">
            <p className="text-xs text-white">Copyright © 2024 Jeloxio Company, Include. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
