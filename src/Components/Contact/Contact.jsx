import StarIcon from "../StartIcon/StarIcon";

const Contact = () => {
    return (
        <div className="container mx-auto p-5 flex flex-col items-center min-h-[calc(100vh_-_380px)]">
             <h2 className="uppercase text-2xl md:text-3xl lg:text-4xl font-bold ">contact component</h2>
             <StarIcon color="#000"/>
            <form action="" className="p-5 w-[500px] max-w-full mx-auto">
                <div className="group relative my-10">
                    <label
                        htmlFor="UserEmail"
                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                    >
                        <input
                            type="text"
                            id="userName"
                            placeholder="userName"
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />

                        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        userName
                        </span>
                    </label>
                </div>
                <div className="group relative my-10">
                    <label
                        htmlFor="userAge"
                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                    >
                        <input
                            type="text"
                            id="UserAge"
                            placeholder="userAge"
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />

                        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        userAge
                        </span>
                    </label>
                </div>
                <div className="group relative my-10">
                    <label
                        htmlFor="UserEmail"
                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                    >
                        <input
                            type="email"
                            id="UserEmail"
                            placeholder="Email"
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />

                        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                            Email
                        </span>
                    </label>
                </div>
                <div className="group relative my-10">
                    <label
                        htmlFor="userPassword"
                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                    >
                        <input
                            type="password"
                            id="userPassword"
                            placeholder="userPassword"
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />

                        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        userPassword
                        </span>
                    </label>
                </div>
                <button type="submit" className="text-white bg-[#1abc9c] p-2 rounded">send Message</button>
            </form>
        </div>
    );
};

export default Contact;
