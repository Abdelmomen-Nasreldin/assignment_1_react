import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const PortfolioCard = ({imgSrc, className}) => {
    const [isShown, setIsShown] = useState(false)
    const onMouseEnter = ()=>{
        setIsShown(true)
    }
    const onMouseLeave = ()=>{
        setIsShown(false)
    }
    const openModal = ()=>{}
  return (
    <div className={`${className} relative rounded-xl overflow-hidden cursor-pointer hover:show`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={openModal}>
   <img src={`src/assets/images/${imgSrc}`} alt="card image" />
  <div className={`${isShown? 'opacity-100':'opacity-0'} overLay bg-[#29b198ea] w-full h-full absolute top-0 left-0 flex justify-center items-center transition-opacity duration-700`}>
    {/* <ng-icon className="text-[6rem] text-white" name="bootstrapPlusLg"></ng-icon> */}
  </div>
</div>

  )
}

export default PortfolioCard