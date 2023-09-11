const publicURL = import.meta.env.VITE_REACT_APP_PUBLIC_URL_Images;

// eslint-disable-next-line react/prop-types
const Modal = ({ showModal, imgSrc}) => {
   
    return (
        <>
            {showModal && (
                <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <img src={`${publicURL}/${imgSrc}`} alt="card image" />

                        </div>
                    </div>
                </div>
            )}
            {showModal && (
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            )}
        </>
    );
};

export default Modal;
