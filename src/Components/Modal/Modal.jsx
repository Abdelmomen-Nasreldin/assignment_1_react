import { useState } from "react";
const Modal = () => {
    const [showModal, setShowModal] = useState(false)
    const toggleModal = () => {
        setShowModal(!showModal)
    };
    return (
        <>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={toggleModal}
            >
                Open regular modal
            </button>
            {showModal && (
                <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/* <!--content--> */}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"></div>
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
