import React from "react";
import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx"
import Footer from "../components/Footer/Footer.jsx";
import ProjectsList from "../components/ProjectsList/ProjectsList.jsx";


function Home() {
    return (
        <>
            <Header />
            <div className="container">
                <Hero />
                <ProjectsList />
            </div>
            <Footer />
        </>
    )
}

export default Home