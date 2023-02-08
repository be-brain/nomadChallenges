import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div className="w-full h-full bg-pink-100 p-20 grid grid-cols-3 gap-3">
            <div className="bg-slate-50 px-6 py-7 flex flex-col items-center">
                <div className="w-full text-3xl font-extrabold mt-4 mb-7">
                    Weather
                </div>
                <div className="space-y-4 w-full">
                    <div className="bg-slate-50 rounded-2xl border-2 border-b-8 border-black shadow-sm flex justify-between items-center px-4 py-5">
                        <div>
                            <div className="text-lg font-extrabold">Casius</div>
                            <p className="text-xs font-semibold">Mars, 12AM</p>
                        </div>
                        <div className="flex justify-between items-center space-x-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-12 h-12"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                                />
                            </svg>
                            <div className="text-3xl font-extrabold">
                                85&deg;
                            </div>
                        </div>
                    </div>
                    <div className="bg-yellow-400 rounded-2xl border-2 border-b-8 border-black shadow-sm flex justify-between items-center px-4 py-5">
                        <div>
                            <div className="text-lg font-extrabold">
                                Dlacria
                            </div>
                            <p className="text-xs font-semibold">Mars, 12AM</p>
                        </div>
                        <div className="flex justify-between items-center space-x-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-12 h-12"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                                />
                            </svg>
                            <div className="text-3xl font-extrabold">
                                85&deg;
                            </div>
                        </div>
                    </div>
                    <div className="bg-teal-400 rounded-2xl border-2 border-b-8 border-black shadow-sm flex justify-between items-center px-4 py-5">
                        <div>
                            <div className="text-lg font-extrabold">
                                New York
                            </div>
                            <p className="text-xs font-semibold">USA, 12AM</p>
                        </div>
                        <div className="flex justify-between items-center space-x-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-12 h-12"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                                />
                            </svg>
                            <div className="text-3xl font-extrabold">
                                85&deg;
                            </div>
                        </div>
                    </div>
                    <div className="bg-red-400 text-white rounded-2xl border-2 border-b-8 border-black shadow-sm flex justify-between items-center px-4 py-5">
                        <div>
                            <div className="text-lg font-extrabold">Zomato</div>
                            <p className="text-xs font-semibold">India, 12AM</p>
                        </div>
                        <div className="flex justify-between items-center space-x-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-12 h-12"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                                />
                            </svg>
                            <div className="text-3xl font-extrabold">
                                20&deg;
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-50 w-16 h-16 rounded-full border-t-2 border-b-4 border-x-2 border-black flex justify-center items-center mt-20 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                    </svg>
                </div>
            </div>
            <div className="bg-slate-50 px-6 py-7">
                <div className="bg-slate-50 w-16 h-16 rounded-full border-t-2 border-b-4 border-x-2 border-black flex justify-center items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-sm font-bold text-slate-600">
                        SIMPLE TAG
                    </p>
                    <p className="text-3xl font-extrabold mt-4">
                        Work with best
                    </p>
                    <p className="text-3xl font-extrabold mt-1 mb-7">
                        designers
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <label className="bg-yellow-400 w-50 h-60 rounded-2xl text-white flex items-center justify-center border-2 border-black">
                        <svg
                            className="h-12 w-12 "
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <input className="hidden" type="file" />
                    </label>
                    <label className="bg-teal-400 w-full h-50 rounded-2xl text-white flex items-center justify-center border-2 border-black">
                        <svg
                            className="h-12 w-12 "
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <input className="hidden" type="file" />
                    </label>
                    <label className="bg-pink-400 w-50 h-60 rounded-2xl text-white flex items-center justify-center border-2 border-black">
                        <svg
                            className="h-12 w-12 "
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <input className="hidden" type="file" />
                    </label>
                    <label className="bg-red-400 w-full h-50 rounded-2xl text-white flex items-center justify-center border-2 border-black">
                        <svg
                            className="h-12 w-12 "
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <input className="hidden" type="file" />
                    </label>
                </div>
                <button className="bg-blue-700 rounded-xl text-white text-2xl font-extrabold w-full px-3 py-5 mt-7">
                    Let&apos;s get it done
                </button>
            </div>
            <div className="bg-yellow-500 px-6 py-7">
                <div className="w-full flex justify-start space-x-24">
                    <div className="bg-slate-50 w-16 h-16 rounded-full border-t-2 border-b-4 border-x-2 border-black flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    </div>
                    <p className="text-3xl font-extrabold mt-4 mb-7">Friends</p>
                </div>
                <div className="space-y-4">
                    <label htmlFor="searchBar" className="relative">
                        <input
                            id="searchBar"
                            className="w-full bg-slate-50 rounded-2xl border-2 border-b-8 border-black shadow-sm flex justify-between items-center px-3 py-2 placeholder:text-gray-800 placeholder:font-medium"
                            placeholder="Search with love..."
                        ></input>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 absolute transform top-3 left-64"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </label>
                    <div className="bg-slate-50 rounded-2xl border-2 border-black shadow-sm flex justify-between items-center px-4 py-5">
                        <div className="flex space-x-3">
                            <div className="bg-pink-300 rounded-full border-2 border-black w-11 h-11"></div>
                            <div>
                                <div className="text-lg font-extrabold">
                                    Bill Rizer
                                </div>
                                <p className="text-xs font-semibold text-slate-700">
                                    Planet Designer
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center space-x-4">
                            <div className="bg-yellow-500 px-3 py-2 border border-t-2 border-b-4 border-black rounded-xl text-sm font-extrabold">
                                <p>invite</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl border-2 border-black shadow-sm flex justify-between items-center px-4 py-5">
                        <div className="flex space-x-3">
                            <div className="bg-pink-300 rounded-full border-2 border-black w-11 h-11"></div>
                            <div>
                                <div className="text-lg font-extrabold">
                                    Genbei Yagy
                                </div>
                                <p className="text-xs font-semibold text-slate-700">
                                    Planet Designer
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center space-x-4">
                            <div className="bg-yellow-500 px-3 py-2 border border-t-2 border-b-4 border-black rounded-xl text-sm font-extrabold">
                                <p>invite</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl border-2 border-black shadow-sm flex justify-between items-center px-4 py-5">
                        <div className="flex space-x-3">
                            <div className="bg-pink-300 rounded-full border-2 border-black w-11 h-11"></div>
                            <div>
                                <div className="text-lg font-extrabold">
                                    Lancy Neo
                                </div>
                                <p className="text-xs font-semibold text-slate-700">
                                    Rogue Corp
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center space-x-4">
                            <div className="bg-black text-white px-3 py-2 border border-t-2 border-b-4 border-black rounded-xl text-sm font-extrabold">
                                <p>invited</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl border-2 border-black shadow-sm flex justify-between items-center px-4 py-5">
                        <div className="flex space-x-3">
                            <div className="bg-pink-300 rounded-full border-2 border-black w-11 h-11"></div>
                            <div>
                                <div className="text-lg font-extrabold">
                                    Bill Rizer
                                </div>
                                <p className="text-xs font-semibold text-slate-700">
                                    Hard Cops
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center space-x-4">
                            <div className="bg-yellow-500 px-3 py-2 border border-t-2 border-b-4 border-black rounded-xl text-sm font-extrabold">
                                <p>invite</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl border-2 border-black shadow-sm flex justify-between items-center px-4 py-5">
                        <div className="flex space-x-3">
                            <div className="bg-pink-300 rounded-full border-2 border-black w-11 h-11"></div>
                            <div>
                                <div className="text-lg font-extrabold">
                                    Konami
                                </div>
                                <p className="text-xs font-semibold text-slate-700">
                                    Xenon Creator
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center space-x-4">
                            <div className="bg-yellow-500 px-3 py-2 border border-t-2 border-b-4 border-black rounded-xl text-sm font-extrabold">
                                <p>invite</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
