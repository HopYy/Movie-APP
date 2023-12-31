import axios from "axios"

export const fetchContent = async (PATHNAME) => {
    const url = `${process.env.REACT_APP_API_URL}/${PATHNAME}`
    const response = await axios.get(url, {
        params: {
            api_key: process.env.REACT_APP_API_KEY
        }
    })

    const { data: { results } } = response

    const ContentDataCheck = results.length > 0
    ? results.filter((content) => content.poster_path !== null && content.backdrop_path !== null)
    : [];

    return ContentDataCheck 
}

export const fetchReview = async (PATHNAME) => {
    const url = `${process.env.REACT_APP_API_URL}/${PATHNAME}`
    const response = await axios.get(url, {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            append_to_response: "videos"
        }
    })

    const { data } = response

    return data
}

