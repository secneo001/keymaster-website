import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, projectData, privacy, socialMedias }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer projectData={projectData} privacy={privacy} socialMedias={socialMedias} />
        </>
    )
}

export default Layout