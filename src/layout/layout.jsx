import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { useSelector } from "react-redux";
import AdminNavbar from "../components/AdminNavbar";
const Layout = (props) => {
    const [showCategories, setShowCategories] = useState(false)

    const categoriesIcons = () => {
        setShowCategories(!showCategories)
    }
    const {user} = useSelector(state=>state.user)
    
    return (
        <>
            {user?.isAdmin ? <AdminNavbar/>:<Navbar /> }
            {user?.isAdmin}
            
            <main>{props.children}</main>
            <Footer />
        </>
    );
};

export default Layout;
