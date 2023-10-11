import React from "react"
import Link from "next/link"
import './componentStyles/NavBar.css'

function NavBar() {
    return (
        // <nav className="w-full glassMorph text-white">
        <nav className="w-full ">
            <div className="sizeFixer max-w-screen-2xl flex flex-wrap items-center justify-between lg:justify-evenly px-4 lg:px-16 2xl:px-6 py-2">
                <div className="w-auto lg:order-2 lg:w-1/5 lg:text-center">
                    <a className="text-xl font-heading hover:bg-transparent flex flex-row justify-center" href="/">
                        <img src="../assets/logo-sm.png" alt="Logo" className="h-14 mr-2" />
                        <div className="underlineAppearAnim font-semibold  text-defcolor hover:text-white">
                            NETWADE
                            <br />
                            STUDIOS
                        </div>
                    </a>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 text-grey-500 border border-grey-500 rounded navbar-burger">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>
                                Menu
                            </title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div className="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/6">
                    <a className="block mt-4 px-5 text-defcolor hover:text-white lg:inline-block lg:mt-0 hover:text-yellow-700 dark:hover:text-white hover:bg-transparent border-b-2 border-transparent hover:border-white" href="/">
                        Home
                    </a>
                    <a className="block mt-4 px-5 text-defcolor hover:text-white lg:inline-block lg:mt-0 hover:text-yellow-700 dark:hover:text-white hover:bg-transparent border-b-2 border-transparent hover:border-white" href="/about">
                        About
                    </a>
                    <a className="block mt-4 px-5 text-defcolor hover:text-white lg:inline-block lg:mt-0 hover:text-yellow-700 dark:hover:text-white hover:bg-transparent border-b-2 border-transparent hover:border-white" href="/services">
                        Services
                    </a>
                    <a className="block px-5 text-defcolor hover:text-white lg:inline-block lg:mt-0 hover:text-yellow-700 dark:hover:text-white hover:bg-transparent border-b-2 border-transparent hover:border-white" href="/projects">
                        Projects
                    </a>
                </div>
                <div className="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/6 lg:text-right">
                    <a className="block mt-4 px-5 text-defcolor hover:text-white lg:inline-block lg:mt-0 hover:text-yellow-700 dark:hover:text-white hover:bg-transparent border-b-2 border-transparent hover:border-white" href="/faq">
                        FAQ
                    </a>
                    <a className="block mt-4 px-5 text-defcolor hover:text-white lg:inline-block lg:mt-0 hover:text-yellow-700 dark:hover:text-white hover:bg-transparent border-b-2 border-transparent hover:border-white" href="/contact">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar