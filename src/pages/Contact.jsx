import Banner from "../components/Banner/Banner.jsx"
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ContactForm from "../components/ContactForm/ContactFrom.jsx";

function Contact() {
    return (
        <>
            <Header />
            <Banner title="Contact" image="contact.jpg" />
            <div className="container">
                <ContactForm />
            </div>
            <Footer />
        </>
    )
}

export default Contact