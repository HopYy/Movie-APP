import { useState, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchReview } from "../api/fetchData";
import Header from "../components/navbar/Header"
import TrailerVideo from "../components/content/TrailerVideo";
import ReviewContent from "../components/content/ReviewContent";
import ContentContainer from "../components/content/ContentContainer";
import Footer from "../components/footer/Footer";
import Spinner from "../components/loader/Spinner";
import ContentSectionError from "../components/errors response/ContentSectionError";
import ShowMore from "../components/content/ShowMore";

const Review = () => {
    const topContainer = useRef(null)
    const otherMoviesPathname = `discover/movie`

    const { id } = useParams()
    const PATHNAME = `movie/${id}`

    const { data, isLoading, error } = useQuery('cards', () => fetchReview(PATHNAME))
    const [trailer, setTrailer] = useState(null)

    useEffect(() => {
        if (data && data.videos && data.videos.results) {
            const trailer = data.videos.results.find(vid => vid.name === "Official Trailer")
            setTrailer(trailer ? trailer : data.videos.results[0])
        }
    }, [data])

    if(isLoading) return (
        <div className="w-screen h-screen flex justify-center items-center">
            <Spinner />
        </div>
    )
    if(error) return (
        <div className="w-screen h-screen flex justify-center items-center">
            <ContentSectionError />
        </div>
    )

    return (
        <>
        {
            !isLoading && !error && data && (
                <>
                <div className="w-full h-header-md lg:h-[60vh] relative overflow-hidden">
                    <div className="hidden lg:flex justify-center items-center w-full h-full absolute inset-0">
                        <MainBackground 
                            trailer={trailer} 
                            data={data} 
                        />
                    </div>
                    <div className="hidden lg:block w-full h-full absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
                    <Header />
                </div>
                <ReviewContent 
                    data={data}
                    trailer={trailer}
                    />
                </>
            )
        }
        <div ref={topContainer} className="flex flex-col justify-center items-start">
            <h1 className="text-white text-3xl m-8">Other movies</h1>
            <ContentContainer pathname={otherMoviesPathname} />
            <ShowMore topContainer={topContainer} />
        </div>
        <Footer />
        </>
    )
}

const MainBackground = ({ trailer, data }) => {
    if(trailer) {
        return (
            <TrailerVideo 
                trailer={trailer}
                img={`${process.env.REACT_APP_API_IMAGE}/${data.backdrop_path}`}
            />
        )
    }

    return (
        <img 
            className="w-full h-full object-cover object-center blur-sm" 
            src={`${process.env.REACT_APP_API_IMAGE}/${data.backdrop_path}`} 
            alt="Background" 
        />
    )
}

export default Review