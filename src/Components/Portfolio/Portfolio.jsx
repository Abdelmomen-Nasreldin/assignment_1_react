import PortfolioCard from "../PortfolioCard/PortfolioCard"

const cards = ["port1.png","port2.png","port3.png","port1.png","port2.png","port3.png"]

const Portfolio = () => {
  return (
    <div className="portfolio text-[#2c3e50]">
  <div className="container mx-auto px-4 pt-10 pb-32  flex flex-col items-center">
    <h2 className="uppercase text-2xl md:text-3xl lg:text-4xl font-bold ">portfolio component</h2>
    {/* <app-star-icon className="my-3" color="#2c3e50"></app-star-icon> */}
    <div className="flex justify-center flex-wrap gap-10">
      {
        cards.map(card=>{
            return(
                <PortfolioCard className="flex-[0_1_380px]" imgSrc={card} key={card}/>
            )
        })
      }
    </div>
  </div>
</div>

  )
}

export default Portfolio