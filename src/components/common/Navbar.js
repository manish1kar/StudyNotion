import React, { useEffect, useState } from 'react';
import { Link, matchPath } from 'react-router-dom';
import logo from '../../assets/Logo/Logo-Full-Light.png';
import {NavbarLinks} from '../../data/navbar-links';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RiShoppingCartFill } from "react-icons/ri";
import ProfileDropDown from '../core/Auth/ProfileDropDown';
import { apiConnector } from '../../services/apiConnector';
import { categories } from '../../services/apis';
import { IoIosArrowDropdownCircle } from "react-icons/io";



const Navbar = () => {

    const location = useLocation();
    const {token} = useSelector((store) => store.auth);
    const {user} = useSelector((store) => store.profile);
    const {totalItems} = useSelector((store) => store.cart);

    const [subLinks, setSubLinks] = useState([]);

    const fetchSubLink = async() => {
        try{
            const result = await apiConnector("GET", categories.CATEGORIES_API);
            console.log(result)
            setSubLinks(result?.data?.data);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=> {
        fetchSubLink();
    }, []);

    const  matchRoute = (route) => {
      return  matchPath({path:route}, location.pathname);
    }
  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
        <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
            <Link to={"/"}>
                <img src={logo} width={160} height={42} loading='lazy' alt='logo'/>
            </Link>
            <nav>
                <ul className='flex gap-x-6 text-richblack-25 relative'>
                    {
                        NavbarLinks.map((link, index)  => (
                            <li key={index}>
                                {
                                    link.title === "Catalog" ? (
                                        <div className='relative flex items-center gap-2 group'>
                                            <p>{link.title}</p>
                                            <IoIosArrowDropdownCircle />
                                            <div className='invisible absolute left-[50%] top-[50%]
                                            translate-x-[-40%] translate-y-[20%]
                                            flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900
                                            opacity-0 transition-all duration-200 group-hover:visible
                                            group-hover:opacity-100 lg:w-[300px] z-20'>

                                            <div className='absolute left-[50%] top-0 translate-x-[-40%]
                                            translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-5 '>

                                            </div>
                                            {
                                                subLinks?.length ? (
                                                    subLinks.map((link, index)=>(
                                                        <Link to={"/"} key={index}>
                                                            <p className='hover:bg-richblack-50 px-2'>{link.name}</p>
                                                        </Link>
                                                    ))
                                                ) : 
                                                (<div></div>)
                                            }

                                            </div>
                                        </div>
                                        ) : 
                                    (
                                        <Link to={link?.path}>
                                            <p className={`${matchRoute(link.path) ? "text-yellow-25" : "text-richblack-25"}`}>
                                                {link.title}
                                            </p>
                                        </Link>
                                    )
                                }
                            </li>
                        ))
                        
                    }
                </ul>
            </nav>
            
            <div className='flex gap-x-4 items-center'>
                    {
                        user && user?.accountType !== "Instructor" && (
                            <Link to={"/dashboard/cart"} className='relative'>
                                <RiShoppingCartFill /> {
                                    totalItems > 0 && <span>{totalItems}</span>
                                }
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to={"/login"}>
                                <button className='border border-richblack-700 bg-richblack-800 px-[12px]
                                py-[8px] rounded-md ring-richblack-100'>
                                    Login
                                </button>
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to={"/signup"}>
                            <button className='border border-richblack-700 bg-richblack-800 px-[12px]
                                py-[8px] rounded-md ring-richblack-100'>
                                    SignUp
                                </button>
                            </Link>
                        )
                    }
                    {
                        token !== null && <ProfileDropDown />
                    }
            </div>

        </div>
    </div>
  )
}

export default Navbar