import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [isHovered, setIsHovered] = useState(false);
    const { user } = useSelector((state) => state.user)
    console.log(user);
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const logouthandle = () => {
        localStorage.clear();
        navigate("/login")
        window.location.reload();
    }


    return (
        <nav className="sticky z-50 top-0 bg-slate-500 text-xl">
            <div className="flex justify-start space-x-11 h-20">
                <div className="flex justify-center align-middle">
                    <button>
                        <Link to="/home" className="text-2xl flex justify-center align-middle">
                            <img className='size-10' src="https://cdn-icons-png.flaticon.com/512/9752/9752709.png" alt="" />
                            Sponsor Finder
                        </Link>
                    </button>

                    <div className='flex text-lg ml-14 space-x-10 justify-center items'>
    <button className=" hover:text-white transition duration-300 ease-in-out"><Link to="/Find">Sponsors</Link></button>
    <button className=" hover:text-white transition duration-300 ease-in-out"><Link to="/Opportunites">Opportunities</Link></button>
    <button className=" hover:text-white transition duration-300 ease-in-out"><Link to="/RegSponsor">Be a Sponsor</Link></button>
    <button className=" hover:text-white transition duration-300 ease-in-out"><Link to="/Requests">Requests</Link></button>
    <button className=" hover:text-white transition duration-300 ease-in-out"><Link to="/events">Your Events</Link></button>
    <button className=" hover:text-white transition duration-300 ease-in-out"><Link to="/About">About Us</Link></button>
    <button className=" hover:text-white transition duration-300 ease-in-out"><Link to="/Analytic">Analytic</Link></button>
    <button className=" hover:text-white rounded-full pt transition duration-300 ease-in-out"><Link to="/Room">Video Call</Link></button>
</div>


                </div>

                {user ? <div className="fixed flex flex-row justify-items-center items-center right-10 p-4 cursor-pointer">
                    <div className='flex items-center justify-center mr-5'>
                        <button onClick={logouthandle}>Logout</button>
                    </div>
                    <Link to='/account'>
                        <div className='flex justify-center items-center '>
                            <div className='mr-5 ml-2 gap-10 '>{user ? user.username.toUpperCase() : ""}</div>

                        </div>
                    </Link>
                    <Link to="/notification">
                        <div className='flex flex-row h-6 '>
                            <img src="https://www.svgrepo.com/show/31480/notification-bell.svg" alt="hi" />
                        </div>
                    </Link>
                </div> : ""}
            </div>
        </nav>
    );
}

export default Navbar;
