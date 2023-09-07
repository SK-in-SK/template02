
import Image from 'next/image';

import styles from './Funding.module.css';
import cfi from '../assets/Funding/CFI.png';
import nserc from '../assets/Funding/NSERC.png';

import arthritis from '../assets/Funding/Arthritis.png';
import mitacs from '../assets/Funding/Mitacs.png';
import cihi from '../assets/Funding/CIHI.png';


const Funding = ({ siteName }) => {

    

    const fundingLogos = [ 
        {url: cfi, alt: "CFI logo"},
        {url: nserc, alt: "NSERC logo"},
        {url: arthritis, alt: "Arthritis Society logo"},
        {url: mitacs, alt: "Mitacs logo"},
        {url: cihi, alt: "CIHI logo"}

    ];

    return (
        <div className={styles.funding}>
            <div className={styles.funding_inner}>
                {fundingLogos.map((logo, logoIndex) => (
                    <div key={logoIndex} className={styles.funding_logo_container}>
                        <Image src={logo.url} alt={logo.alt} className={styles.logo_image}/>
                    </div>
                ))}
            
            </div>
        </div>
    );
};

export default Funding;
