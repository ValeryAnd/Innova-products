import {Link} from "react-router-dom";
import logo from '../imagenes/logo1.png';
import pagos from '../imagenes/pagos-1.webp'
import styles from '../estilos/footer.module.css'

import {FaInstagram, FaFacebookSquare, FaTiktok} from 'react-icons/fa'

export default function Footer() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };
    return (
        <footer>
            <ul className={styles.footerMenu}>
                <li><Link to='#' onClick={() => scrollToSection('inicio')}><img src={logo} alt="logo" className={styles.logo}></img></Link></li>
                <li><Link to='#' onClick={() => scrollToSection('inicio')}>Inicio</Link></li>
                <li><Link to='#' onClick={() => scrollToSection('new')}>New in</Link></li>
                <li><Link to='#' onClick={() => scrollToSection('stock')}>Ultimo Stock</Link></li>
                <li className={styles.footerList}>Contact us
                    <ul>
                        <li><Link to='https://www.instagram.com/'>
                            <FaInstagram size={24}></FaInstagram>
                        </Link>
                        </li>
                        <li>
                            <Link to='https://www.facebook.com/'>
                                <FaFacebookSquare size={24}></FaFacebookSquare>
                            </Link>
                        </li>
                        <li>
                            <Link to='https://www.tiktok.com/upload?lang=es'>
                                <FaTiktok size={24}></FaTiktok>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>

            <div className={styles.footerBuy}>
                <img src={pagos} alt="pagos"></img>
            </div>
            <p className={styles.copyright}>© 2023 por INNOVA PRODUCTS - Todos los derechos reservados</p>
        </footer>
    )
}