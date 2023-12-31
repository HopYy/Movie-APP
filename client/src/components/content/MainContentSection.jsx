import { useRef } from "react"
import { useLocation } from "react-router-dom"
import Navbar from "../navbar/Navbar"
import ContentContainer from "./ContentContainer"
import ShowMore from "./ShowMore"

const MainContentSection = () => {
    const topContainer = useRef(null)
    const { pathname } = useLocation()

    return (
        <div ref={topContainer}>
            <Navbar />
            <ContentContainer pathname={pathname} />
            <ShowMore topContainer={topContainer} />
        </div>
    )
}

export default MainContentSection