import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ShowMore = ({ topContainer }) => {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    
    const [page, setPage] = useState(1)

    useEffect(() => {
        navigate({ search: `?page=${page}` })
    }, [page])

    useEffect(() => {
        setPage(1)
    }, [pathname])

    const changePage = () => {
        setPage((prevPage) => prevPage + 1)
        topContainer.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="w-full text-center py-5">
            <div className="flex justify-center items-center" onClick={changePage}>
                <div className="flex-1 h-[1px] bg-main mx-3"></div>
                    <span className="text-white text-md cursor-pointer font-thin">show more</span>
                <div className="flex-1 h-[1px] bg-main mx-3"></div>
            </div>
        </div>
    )
}

export default ShowMore