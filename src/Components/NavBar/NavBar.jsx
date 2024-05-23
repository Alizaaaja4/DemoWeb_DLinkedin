// import React from "react";

const NavBar = () => {
    return(
        <div className="navbar flex justify-between items-center p-[2rem]">
            <div className="logoDiv">
                <h1 className="logo text-[25px] text-blueColor">
                    <strong>D'Linke</strong>din</h1>
            </div>
            <div className="menu flex gap-8">
                <li className="menulist text-[#6f6f6f] hover:text-blueColor">Jobs</li>
                <li className="menulist text-[#6f6f6f] hover:text-blueColor">Companies</li>
                <li className="menulist text-[#6f6f6f] hover:text-blueColor">About</li>
                <li className="menulist text-[#6f6f6f] hover:text-blueColor">Login</li>
                <li className="menulist text-[#6f6f6f] hover:text-blueColor">Register</li>
            </div>

        </div>
    )
}

export default NavBar