import StarIcon from "../StartIcon/StarIcon"

const About = () => {
  return (
    <div className="about bg-[#1abc9c] text-white min-h-[calc(100vh_-_380px)]">
  <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center">
    <h2 className="uppercase text-2xl md:text-3xl lg:text-4xl font-bold ">about component</h2>
    <StarIcon />
    <div className="flex justify-center flex-wrap gap-5">
      <p className="flex-[0_1_370px]">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      <p className="flex-[0_1_370px]">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
  </div>
</div>

  )
}

export default About