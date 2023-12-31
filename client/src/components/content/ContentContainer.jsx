import { memo } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query"
import { fetchContent } from "../../api/fetchData"
import ContentCard from "./ContentCard";
import Spinner from "../loader/Spinner";
import ContentSectionError from "../errors response/ContentSectionError";

const MemoizedContentCard = memo(ContentCard)

const ContentContainer = ({ pathname }) => {
    const { search } = useLocation()
    const PATHNAME = pathname === '/' ? 'discover/movie' + search : pathname + search

    const { data, isLoading, error } = useQuery(['content', PATHNAME], () => fetchContent(PATHNAME)) 

    return (
        <>
            {
                isLoading && (
                    <Spinner />
                )
            }
            {
                error && (
                    <ContentSectionError />
                )
            }
            {
                !isLoading && !error && data && (
                    <div className="flex flex-col justify-center items-center px-8">
                        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center">
                            {
                                data.map((content) => (
                                    <MemoizedContentCard 
                                        key={content.id}
                                        content={content} 
                                    />
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default ContentContainer