import { memo, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import PosterCard from './PosterCard';

const MemoizedCard = memo(PosterCard);

export const PosterContent = ({ data }) => {
    const responsive = useMediaQuery({ query: '(min-width: 1536px)' });
    const LENGTH_CONTAINERS = responsive ? 3 : 2;
    
    const getRandomContent = useMemo(() => {
        const cards = 9
        const numbersRandom = Array.from(Array(data.length).keys())
        .sort(() => Math.random() - 0.5)
        .slice(0, cards - data.length)
    
        const randomContent = Array.from(numbersRandom, (index) => data[index]);

        return randomContent
    }, [data])

    const getContentArrays = (randomContent) => {
        const ITEMS_PER_ROW = 3;
        const numInnerArrays = Math.ceil(randomContent.length / ITEMS_PER_ROW)

        const contentArrays = Array.from({ length: numInnerArrays }, (_, i) => {
            const start = i * ITEMS_PER_ROW
            const end = start + ITEMS_PER_ROW
            const group = randomContent.slice(start, end).concat(Array(ITEMS_PER_ROW - (end - start)).fill(null))
            return group
        }).slice(0, LENGTH_CONTAINERS)

        return contentArrays
    }

    const posters = getContentArrays(getRandomContent)
    
    return (
        <div className="w-4/5 h-4/5 flex justify-center items-center gap-2">
            { 
                posters.map((contentGroup, i) => (
                    <MemoizedCard 
                        key={i} 
                        url={process.env.REACT_APP_API_IMAGE} 
                        content={contentGroup}
                     />
                ))
            }
        </div>
    )
}

