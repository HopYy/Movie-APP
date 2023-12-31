const ContentCard = ({ content }) => {
    return (
        <div className='rounded-2xl overflow-hidden relative'>
            <div className='review opacity-0 w-full h-full bg-black bg-opacity-70 absolute top-0 left-0'>
                <div className='hover w-full bg-black bg-opacity-50 absolute bottom-0 left-0 pb-2'>
                    <div className='flex flex-col justify-center items-center py-3'>
                        <span className='text-white text-lg text-center px-3'>
                            {content.title || content.name}
                        </span>
                        <a href={`/review/movie/${content.id}`}>
                            <button className='text-black bg-main rounded-xl opacity-50 px-4 py-2 hover:opacity-100 my-4'>Review</button>
                        </a>
                        <span className='text-white text-lg select-none'>
                            {`${content.vote_average} / 10`}
                        </span>
                    </div>
                </div>
            </div>
            <img className='object-center object-cover' src={`${process.env.REACT_APP_API_IMAGE}/${content.poster_path}`} alt="Poster" />
        </div>
    )
}

export default ContentCard