import { Link, NavLink } from "react-router-dom";
import Home from "../pages/Home";
const Navbar = () =>{
    return(
      <header>
          <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
              <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                  <a href="/" class="flex items-center">
                      <img src="img/logo-dark.png" class="mr-3 h-6 sm:h-9 "   alt="Nawaya Khair" />
                  </a>
                  <div class="flex items-center lg:order-2">
                      <a href="https://api.whatsapp.com/send?phone=00966508939946&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%B7%D9%84%D8%A8%20%D8%AE%D8%AF%D9%85%D8%A9%20"
                       class="text-white bg-secondary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none ">ابدأ الآن </a>
                      <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                          <span class="sr-only">Open main menu</span>
                          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </button>
                  </div>
                  <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                      <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:gap-8 lg:mt-0">
                          <li>
                            <NavLink to="/">
                              <a href="#" class="block py-2 md:mx-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary lg:p-0">الرئيسية</a>
                              </NavLink>
                          </li>
                         <Link to="من-نحن">
                          <li>
                              <a href="#" class="block py-2  text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary lg:p-0">من نحن</a>
                          </li>
                          </Link>
                          <NavLink  id="dropdownDefaultButton" data-dropdown-toggle="dropdown">

                          <li>
                              <a href="#" class="block py-2 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary lg:p-0">خدماتنا</a>
                          </li>
                          </NavLink>

                          <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <NavLink to="الخدمات-البرمجية">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">الخدمات البرمجية</a>
      </li>
      </NavLink>

      <NavLink to="الخدمات-التسويقية">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">الخدمات التسويقية</a>
      </li>
      </NavLink>
      <Link to="خدمات-الجرافيك">

      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">خدمات الجرافيك</a>
      </li>
      </Link>

    </ul>
</div>

<Link to="تواصل-معنا">
                          <li>
                              <a href="#" class="block py-2  text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary lg:p-0">تواصل معنا</a>
                          </li>
                          </Link>


                      </ul>
                  </div>
              </div>
          </nav>
      </header>


    )
}

export default Navbar;