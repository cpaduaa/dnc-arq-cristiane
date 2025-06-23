import AboutText from "../components/AboutText/AboutText.jsx"
import Banner from "../components/Banner/Banner.jsx"
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

function About() {
    return (
        <>
            <Header />
            <Banner title="About" image="about.jpg" />
            <div className="container">
                <AboutText />
            </div>
            <Footer />
        </>
    )
}

export default About