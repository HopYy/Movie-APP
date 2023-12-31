import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { FaAngleDown, FaAngleUp   } from "react-icons/fa";

const ResponsiveNav = ({ navbar }) => {
    const [active, setActive] = useState(false)
    const { pathname, search } = useLocation()

    const PATHNAME = pathname === '/' ? 'discover/movie' + search : pathname + search

    const checkForActiveLinkName = navbar.find((link) => link.api === PATHNAME)
    const title = checkForActiveLinkName ? checkForActiveLinkName.name : 'Discover'

    const dropdownArrowIcon = active ? <FaAngleUp className="text-white text-2xl" /> : <FaAngleDown className="text-white text-2xl" />;

    const toggleDropdown = () => {
        setActive(!active)    
    } 

    return (
        <div className="w-fit cursor-pointer select-none relative md:hidden">
            <div className="w-full flex justify-center items-center px-5 border-b-4 border-main" onClick={toggleDropdown}>
                <span className="text-white text-sm lg:text-lg text-center mr-5">
                    {title}
                </span>
                {dropdownArrowIcon}
            </div>
            {
                active && (
                    <ul className="dropdown w-full flex flex-col justify-center items-center bg-main absolute top-100 right-0 rounded-b-xl py-3 px-2 z-10">
                        {
                            navbar.map((link) => (
                                <li key={link.name} id="dropdown-link" className="w-full cursor-pointer text-center border-b-2 border-transparent hover:border-black list-none p-2">
                                    <NavLink to={link.api}>
                                        <span className="text-black text-sm lg:text-lg">
                                            {link.name}
                                        </span>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default ResponsiveNav