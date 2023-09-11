import StarIcon from "../StartIcon/StarIcon";
const publicURL = import.meta.env.VITE_REACT_APP_PUBLIC_URL_Images;

const Home = () => {
  
    return (
        <div className="home bg-[#1abc9c] text-white min-h-[calc(100vh_-_380px)]">
        <div className="container mx-auto px-5 py-16 flex flex-col justify-center items-center ">
          <div className="image ">
            <img src={`${publicURL}/avataaars.svg`} className="w-64 max-w-full" alt="" />
          </div>
          <h2 className="uppercase text-2xl md:text-3xl lg:text-4xl font-bold mt-10 ">start framework</h2>
          <StarIcon />
          <p >Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
      
    );
};

export default Home;
