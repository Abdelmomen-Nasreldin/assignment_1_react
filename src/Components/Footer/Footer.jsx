import { BsFacebook, BsGlobe, BsLinkedin, BsTwitter } from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
  <div className="first-footer bg-[#2c3e50]">
    <div className="container mx-auto px-4 py-16 flex flex-wrap justify-around gap-8">
      <div className="location text-white text-center flex-[1_0_300px]">
        <h3 className="text-xl md:text-2xl lg:text-3xl mb-2 uppercase font-semibold">location</h3>
        <p className="text-sm mb-1 text-center">2215 John Daniel Drive</p>
        <p className="text-sm mb-1 text-center">Clark, MO 65243</p>
      </div>
      <div className="links text-white text-center flex-[1_0_300px]">
        <h3 className="text-xl md:text-2xl lg:text-3xl mb-2 uppercase font-semibold">AROUND THE WEB</h3>
        <ul className="flex flex-wrap justify-center items-center gap-2.5">
          <li className=""><a href="#" className="flex items-center justify-center h-[35px] w-[35px] border rounded-[50%] border-solid"> <BsFacebook /></a></li>
          <li className=""><a href="#" className="flex items-center justify-center h-[35px] w-[35px] border rounded-[50%] border-solid"><BsTwitter /></a></li>
          <li className=""><a href="#" className="flex items-center justify-center h-[35px] w-[35px] border rounded-[50%] border-solid"><BsLinkedin /></a></li>
          <li className=""><a href="#" className="flex items-center justify-center h-[35px] w-[35px] border rounded-[50%] border-solid"><BsGlobe /></a></li>
        </ul>
      </div>
      <div className="about text-white text-center flex-[1_0_300px]">
        <h3 className="text-xl md:text-2xl lg:text-3xl mb-2 uppercase font-semibold">ABOUT FREELANCER</h3>
        <p className="text-sm mb-1 text-center">Freelance is a free to use, licensed Bootstrap theme</p>
        <p className="text-sm mb-4 text-center">created by Route</p>
      </div>
    </div>
  </div>
  <div className="second--footer bg-[#1a252f] ">
    <div className="container mx-auto p-5 text-center text-white ">
      Copyright @ &copyright &copy; Your Website 2021
    </div>
  </div>
</footer>

  )
}

export default Footer