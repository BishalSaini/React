import React from 'react';

function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img
                    className="p-8 rounded-t-lg"
                    src="https://i.pinimg.com/564x/48/1c/8d/481c8d707f873e683331a9ea9a88a496.jpg"
                    alt="profile_image"
                />
            </a>
            <div className="px-5 pb-5">
                <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                     Seeking Exciting Opportunities 
                </h5>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    🚀 Passionate about tech and eager to tackle new challenges! I specialize in coding, problem-solving, and crafting exceptional user experiences. Let's connect and build something extraordinary together!
                </p>
                <div className="flex items-center justify-between mb-4">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        GitHub Profile
                    </a>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Hire Me
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
