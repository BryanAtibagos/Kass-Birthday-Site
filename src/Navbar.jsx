import { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { navLinks } from './data/data'
import { Link } from "react-scroll"

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-full fixed bg-white' style={{ zIndex: 50 }}>
      <div className='flex justify-between md:max-w-[1240px] h-20 mx-auto px-4 items-center text-black'>
        
     <h1 className='w-full text-3xl font-bold cursor-pointer'>
  <Link
    to={'Home'}
    smooth={true}
    duration={500}
    className='flex items-center gap-2'
  >
    {/* <span>Happy Birthday </span> */}
    <span className='font-bold colorchange'>🎂</span>
  </Link>
</h1>

        <ul className='hidden md:flex whitespace-nowrap'>
          {navLinks.map(({ id, title }) => (
            <li key={id} className='p-4'>
              <Link
                to={title}
                smooth
                duration={500}
                className='cursor-pointer'
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <div
          className={
            nav
              ? 'bg-gradient-to-t from-[#ebedf3] via-[#f5f5f5] to-[#f8f8f8] p-2 text-center absolute top-20 right-0 left-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar'
              : 'hidden'
          }
          style={{
            transform: `translateY(${nav ? '0' : '-100%'})`,
            transition: 'transform 0.5s ease',
          }}
        >
          <ul className='p-4 cursor-pointer'>
            {navLinks.map(({ id, title }) => (
              <li key={id} className='p-4'>
                <Link
                  onClick={() => setNav(!nav)}
                  to={title}
                  smooth
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar