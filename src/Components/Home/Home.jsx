import StarIcon from "../StartIcon/StarIcon";

const Home = () => {
  
    return (
        <div className="home bg-[#1abc9c] text-white">
        <div className="container mx-auto px-5 py-16 flex flex-col justify-center items-center ">
          <div className="image ">
            <img src="src/assets/images/avataaars.svg" className="w-64 max-w-full" alt="" />
          </div>
          <h2 className="uppercase text-2xl md:text-3xl lg:text-4xl font-bold mt-10 ">start framework</h2>
          <StarIcon />
          <p >Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
      
    );
};

export default Home;
