'use client'
import { useRef } from 'react';
import video from '../assets/helix_low.webm';
import styles from './FullScreenVideo.module.css';


export default function FullScreenVideo() {

    const videoRef= useRef();
    // Slow down playback so video can be smaller
    const setPlayBack = () => {
        videoRef.current.playbackRate = 0.8;
    };
    return (
        <div className={styles["fullscreen_bg"]}>
            
            <video loop muted autoPlay className={styles["fullscreen_bg_video"]}
                ref={videoRef}
                onCanPlay={() => setPlayBack()}>
                <source src={video} type="video/webm" />
            </video>
        </div>
    );
}
