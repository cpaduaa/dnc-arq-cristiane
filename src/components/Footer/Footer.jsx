import { useContext } from 'react';
import { Link } from 'react-router-dom';

// ASSETS
import './Footer.css';
import BrazilIcon from '../../assets/brazil.svg';
import Logo from '../../assets/dnc-logo.svg';
import UsaIcon from '../../assets/usa.svg';
import FbIcon from '../../assets/fb.svg';
import InIcon from '../../assets/in.svg';
import IgIcon from '../../assets/ig.svg';
import xIcon from '../../assets/x.svg';

//COMPONENTS
import Button from '../Button/Button';

// CONTEXT
import { AppContext } from '../../Contexts/AppContext';

function Footer () {
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }

    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between">
                    <div className="footer-logo-col">
                        <img src={Logo} className="footer-logo"/>
                        <p className="grey-1-color">
                            {appContext.languages?.[appContext.language]?.general?.footerLogoText}
                        </p>
                        <div className="d-flex social-links">
                            <a href="https://google.com" target='_blank'>
                                <img src={FbIcon} />
                            </a>
                            <a href="https://google.com" target='_blank'>
                                <img src={xIcon} />
                            </a>
                            <a href="https://google.com" target='_blank'>
                                <img src={InIcon} />
                            </a>
                            <a href="https://google.com" target='_blank'>
                                <img src={IgIcon} />
                            </a>
                        </div>
                    </div>
                    <div className="d-flex mobile-fb-column">
                            <div className="footer-col">
                                <h3>{appContext.languages?.[appContext.language]?.general?.pages}</h3>
                                <ul>
                                    <li><Link to="/">{appContext.languages?.[appContext.language]?.menu?.home}</Link></li>
                                    <li><Link to="/about">{appContext.languages?.[appContext.language]?.menu?.about}</Link></li>
                                    <li><Link to="/projects">{appContext.languages?.[appContext.language]?.menu?.projects}</Link></li>
                                    <li><Link to="/contact">{appContext.languages?.[appContext.language]?.menu?.contact}</Link></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h3>{appContext.languages?.[appContext.language]?.general?.contact}</h3>
                                <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                                <p className="grey-1-color">suporte@escoladnc.com.br</p>
                                <p className="grey-1-color">(19) 99187-4342</p>
                            </div>
                    </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p className="grey-1-color">Copyright © DNC - 2024</p>
                    <div className="lang-area d-flex">
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('br')}>
                            <img src={BrazilIcon} height="29px"/>
                        </Button>
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('eng')} >
                            <img src={UsaIcon} height="29px"/>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;