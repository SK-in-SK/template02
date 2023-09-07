import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import styles from './Footer.module.css';
import React from 'react';


const Footer = ({ siteName, links }) => {
    var today = new Date();
    let year = today.getFullYear();
    const footerText = `Copyright \u00A9 ${year} ${siteName} - Designed by `;

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_text}>
                <div className={styles.contact}>
                    <div className={styles.contact_text}>
                        <h3>Contact</h3>
                        <p>
                            Laboratory Building<br />
                            57 Campus Drive<br />
                            Saskatoon, SK<br />
                            S7N 5A9<br />
                        </p>
                    </div>
                    <div className={styles.contact_socials}>
                        <span>
                            <AiOutlinePhone/>
                            <p>(306) 966-9999</p>
                        </span>
                        <span>

                            <AiOutlineMail />
                            <a href="mailto:sigmund@lorumlabs.ca">
                                <p>sigmund@lorumlabs.ca</p>
                            </a>
                        </span>
                    </div>
                </div>
                <div className={styles.links}>
                    <h3>Links</h3>
                    <nav>
                    <ul>
                        {links.map((link, index) => (
                            <React.Fragment key={index}>
                                {link.sublinks ? (
                                    <>
                                        {link.sublinks.map((sublink, subindex) => (
                                            <li key={subindex}><a href={sublink.href}>{sublink.name}</a></li>
                                        ))}
                                    </>
                                ) : (
                                    <li key={index}><a href={link.href}>{link.name}</a></li>
                                )}
                            </React.Fragment>
                        ))}
                    </ul>
                    </nav>
                </div>
            </div>
            <hr />
            <div className={styles.footer_copyright}>
                {footerText}
                <a href="https://www.professorpages.ca">Professor Pages</a>
            </div>
        </footer>
    );
};

export default Footer;
