import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import Modal from './../Modal/Modal';
const publicURL = import.meta.env.VITE_REACT_APP_PUBLIC_URL_Images;

// eslint-disable-next-line react/prop-types
const PortfolioCard = ({ imgSrc, className }) => {
    const [isShown, setIsShown] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const onMouseEnter = () => {
        setIsShown(true);
    };
    const onMouseLeave = () => {
        setIsShown(false);
    };
     const toggleModal = () => {
         setShowModal(!showModal)
     }
    return (
        <div
            className={`${className} relative rounded-xl overflow-hidden cursor-pointer hover:show`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={toggleModal}
        >
            <img src={`${publicURL}/${imgSrc}`} alt="card image" />
            <div
                className={`${
                    isShown ? "opacity-100" : "opacity-0"
                } overLay bg-[#29b198ea] w-full h-full absolute top-0 left-0 flex justify-center items-center transition-opacity duration-700`}
            >
                <BsPlusLg className="text-[6rem] text-white" />
            </div>
            <Modal showModal={showModal} imgSrc={imgSrc}/>
        </div>
        
    );
};

export default PortfolioCard;
