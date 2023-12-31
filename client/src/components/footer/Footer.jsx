import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center py-10">
            <span className="text-gray-500 text-2xl font-black select-none">FLIXIFY</span>
            <div className="flex justify-center items-center my-5">
                <FaInstagram className="text-gray-500 text-2xl cursor-pointer mr-5" />
                <FaTwitter className="text-gray-500 text-2xl cursor-pointer mr-5" />
                <FaFacebook className="text-gray-500 text-2xl cursor-pointer mr-5" />
                <FaYoutube className="text-gray-500 text-2xl cursor-pointer mr-5" />
            </div>
            <span className="text-gray-500 text-sm font-thin select-none">© 2023 Flixify. All Rights Reserved.</span>
        </div>
    )
}

export default Footer