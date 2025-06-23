import Banner from "../components/Banner/Banner.jsx"
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ProjectsList from "../components/ProjectsList/ProjectsList.jsx";

function Projects() {
    return (
        <>
            <Header />
            <Banner title="Projects" image="projects.jpg" />
            <div className="container">
                <ProjectsList />
            </div>
            <Footer />
        </>
    )
}

export default Projects;