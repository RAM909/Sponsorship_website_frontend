import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
const Layout = (props) => {
    const [showCategories, setShowCategories] = useState(false)

    const categoriesIcons = () => {
        setShowCategories(!showCategories)
    }
    return (
        <React.Fragment>
            <Navbar />
            <main>{props.children}</main>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
