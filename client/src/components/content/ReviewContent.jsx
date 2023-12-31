const ReviewContent = ({ data, trailer }) => {
    const trailerURL = trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : ''

    return (
    <div className="p-8 h-max flex flex-col justify-start items-center lg:flex-row">
        <div className="w-[25vw] min-w-[250px] max-w-[350px] rounded-2xl overflow-hidden">
            <img className="object-contain object-center" src={`${process.env.REACT_APP_API_IMAGE}${data.poster_path}`} alt="Poster" />
        </div>
        <div className="pl-5">
            <div className="text-start">
                <h1 className="text-white text-4xl">
                    {data.title || data.name}
                </h1>
                <h3 className="text-white text-xl my-3">
                    {data.overview}
                </h3>
                <h3 className="text-white text-xl">
                    {data.tagline}
                </h3>
                <div className="my-5">
                    <div>
                        <span className="text-main text-2xl">Release date: </span>
                        <span className="text-white text-2xl">
                            {data.release_date || data.last_air_date}
                        </span>
                    </div>
                    <div>
                        <span className="text-main text-2xl">Vote avarge: </span>
                        <span className="text-white text-2xl">
                            {data.vote_average}
                        </span>
                    </div>
                    <div>
                        <span className="text-main text-2xl">Genre: </span>
                        <div className="inline">
                            {data.genres.map((genre, index) => (
                                <span key={genre.id} className="text-white text-2xl">
                                    {genre.name}  
                                    {index < data.genres.length - 1 && ' '}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <a href={trailerURL} target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-3xl bg-main">
                <span className="text-xl select-none whitespace-nowrap">
                    Whatch Trailer
                </span>
            </a>
        </div>
    </div>
    )
}

export default ReviewContent