//import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import LoadingComponent from './LoadingComponent';
import styles from './VideoSplash.module.css'


const FullScreenVideo = dynamic(() => import('./FullScreenVideo'), {
    loading: () => <LoadingComponent />,
});

export default function VideoSplash() {


    return (
        <div className={styles['splash_outer']}>
            <div className={styles['splash_overlay']}></div>
            <div className={styles['splash_inner']}>
                    <FullScreenVideo />
                <div className={styles['splash_content']}>
                    <h1>Web design services tailored for academics</h1>
                    <p>Our mission is to empower researchers, professors, and academics by simplifying the process of establishing a strong web presence. We pride ourselves in providing a personalized service that lessens our clients`&apos; workload.</p>
                </div>
            </div>

        </div>
    );
}

