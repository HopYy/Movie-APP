const Card = ({ url,content }) => {
    return (
        <div className="flex-1 flex justify-center items-center gap-2">
            <a href={`/review/movie/${content[0].id}`} className="card relative overflow-hidden rounded-3xl shadow-2xl  cursor-pointer">
                <img 
                    className="object-center object-contain" 
                    src={`${url}/${content[0].poster_path}`} 
                    alt="Poster"
                />
                <div className="hover bg-gradient-to-t from-black to-transparent w-full absolute bottom-0 left-0 text-center">
                    <span className="text-lg text-color-50 font-black px-3">
                        {content[0].title}
                    </span>
                </div>
            </a>
            <div className="flex flex-col justify-center items-center gap-2">
                <a href={`/review/movie/${content[1].id}`} className="card flex-2 relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
                    <img
                        className="object-center object-contain" 
                        src={`${url}/${content[1].backdrop_path}`} 
                        alt="Poster" 
                    />
                    <div className="hover bg-gradient-to-t from-black to-transparent w-full absolute bottom-0 left-0 text-center">
                        <span className="text-lg text-color-50 font-black px-3">
                            {content[1].title}
                        </span>
                    </div>
                </a>
                <a href={`/review/movie/${content[2].id}`} className="card relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
                    <img 
                        className="object-center object-contain" 
                        src={`${url}/${content[2].backdrop_path}`} 
                        alt="Poster" 
                    />
                    <div className="hover bg-gradient-to-t from-black to-transparent w-full absolute bottom-0 left-0 text-center">
                        <span className="text-lg text-color-50 font-black px-3">
                            {content[2].title}
                        </span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Card