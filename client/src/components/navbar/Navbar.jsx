import { NavLink, useLocation } from "react-router-dom"
import ResponsiveNav from "./ResponsiveNav"

const Navbar = () => {  
  const { search } = useLocation()
                
  const navbar = [
    {
      name: 'Popular',
      api: '/movie/popular' + search,
    },
    {
      name: 'Top Rated',
      api: '/movie/top_rated' + search,
    },
    {
      name: 'Upcoming',
      api: '/movie/upcoming' + search,
    },
    {
      name: 'Now Playing',
      api: '/movie/now_playing' + search,
    }
  ]

  console.log(search)

  return (
    <div className="w-full h-header-md bg-black mt-[56px] my-[20px] lg:mt-[20px] px-8">
      <div className="w-full h-full flex justify-start items-center">
        <nav className="w-max h-full hidden md:flex justify-center items-center overflow-x-auto">
          <ul className="w-full flex justify-start items-center">
            {
              navbar.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.api}
                    id='nav-link'
                    className='text-white text-sm lg:text-lg  cursor-pointer px-4 py-2 mr-[25px] whitespace-nowrap'
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </nav>
        <ResponsiveNav navbar={navbar} />
      </div>
    </div>
  )
}

export default Navbar
