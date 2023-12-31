import { FaSearch } from "react-icons/fa"

const Header = () => {    
    return (
        <header className="flex justify-between items-center w-full h-header-md bg-black px-8 fixed top-0 left-0 md:absolute md:bg-transparent bg-gradient-to-b from-black to-transparent z-20">
            <nav className="w-full flex justify-between items-center">
                <a href="/" className="md:mr-10">
                    <span className="text-main text-2xl font-black select-none">FLIXIFY</span>
                </a> 
                <a className="flex justify-center items-center" href="/search">
                    <FaSearch className="text-color-50 text-xl" />
                </a>
            </nav>
        </header> 
    )
}

export default Header