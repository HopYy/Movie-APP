import { useQuery } from 'react-query';
import { fetchContent } from '../../api/fetchData.js';
import { PosterContent } from './PosterContent';
import Spinner from '../loader/Spinner';
import PosterErrorFetch from '../errors response/PosterErrorFetch';

const Poster = () => {
    const PATHNAME = 'discover/movie'
    const { data, isLoading, error } = useQuery('cards', () => fetchContent(PATHNAME))
    
    return (
        <div className='hidden lg:block w-full h-5/6 px-8 mt-[56px]'>
            <div className="w-full h-full rounded-xl overflow-hidden">
                <div className="h-4/5 flex justify-center items-center bg-gradient-to-r from-main to-black overflow-hidden">
                    {
                        isLoading && (
                            <Spinner />
                        )
                    }
                    {
                        error && (
                            <PosterErrorFetch />
                        )
                    }
                    {
                        !isLoading && !error && data && (
                            <PosterContent data={data} />
                        )
                    }
                </div>
                <div className="w-full h-[10px] bg-main z-50"></div>
                <div className="w-full h-1/5 p-10 flex flex-col justify-center items-start bg-gradient-to-b from-black to-gray-900">
                    <h3 className="text-xl text-color-50 font-black select-none">YOUR MOVIES IN ONE PLACE</h3>
                    <h3 className="text-3xl text-color-50 font-black select-none">
                        Welcome to <span className="text-main text-2xl font-black select-none">FLIXIFY</span>
                    </h3>
                </div>
        </div>
        </div>
    );
};

export default Poster;
