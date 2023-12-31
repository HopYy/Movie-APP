import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import ContentContainer from "../components/content/ContentContainer";

const Search = () => {
    const [pathname, setPathname] = useState('discover/movie')
    const [searchValue, setSearchValue] = useState('')
    const searchURL = `search/movie?query=${searchValue}`

    useEffect(() => {
        if(searchValue !== '') {
            setPathname(searchURL)
        }
    }, [searchValue])

    const getSearchedValue = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className="w-screen h-screen px-8 relative">
            <a className="absolute top-0 right-0 my-5 mx-8" href="/">
                <FaTimes className="text-white text-2xl" />
            </a>
            <div className="w-full py-[50px]">
                <input 
                    id="searchInput" 
                    className="bg-transparent w-full h-[60px] border-solid border-b-2 border-main outline-none text-white text-2xl" 
                    type="text" 
                    placeholder="Search . . ."
                    onChange={getSearchedValue}
                 />
            </div>
            <ContentContainer pathname={pathname} />
        </div>
    )
}

export default Search