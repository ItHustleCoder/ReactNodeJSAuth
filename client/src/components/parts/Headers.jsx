import React from "react";

function Headers() {
  return (
    <nav className="dark:bg-slate-900 bg-white border-b border-gray-200 fixed z-30 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
            >
              <svg
                id="toggleSidebarMobileHamburger"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                id="toggleSidebarMobileClose"
                className="w-6 h-6 hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="hidden lg:block">
              <img
                v-lazy="profileObject.avatar"
                className="h-[40px] w-[150px] mr-2 object-cover"
                alt="logo"
              />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button
              id="toggleSidebarMobileSearch"
              type="button"
              className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
            >
              <span className="sr-only">Search</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            <div className="mr-5 hidden lg:block dark:text-red-500">
              <span className="font-semibold">12:00</span>
            </div>
            <div className="">
              <toggleButton></toggleButton>
            </div>
            <div className="pr-4 group inline-block">
              <button
                className="outline-none focus:outline-none border dark:border-red-500 px-3 flex flex-row py-1 rounded-sm items-center min-w-32"
                type="button"
              >
                <span className="pr-1 font-semibold flex-1 dark:text-white">
                  Andrew
                </span>
                <span>
                  <svg
                    className="fill-current h-4 w-4 dark:text-red-500 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>

              <ul className="bg-white border items-center rounded-md transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-[110px] max-w-[120px]">
                <router-link to="/profile">
                  <li className="px-4 cursor-pointer w-full border-b py-2 hover:bg-gray-100">
                    Profilo
                  </li>
                </router-link>

                <li className="px-4 cursor-pointer py-2 w-full hover:bg-gray-100">
                  Log Out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Headers;
