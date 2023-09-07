import styles from './page.module.css'
import VideoSplash from './components/VideoSplash'
import Features from './components/Features'
import Funding from './components/Funding'

import featureImage1 from './assets/feature1.webp';
import featureImage2 from './assets/feature2.webp';
import featureImage3 from './assets/feature3.webp';
export default function Home() {
  const features = [
    { img: featureImage1, alt: 'Description 1', title: 'Detection of knee synovitis using non-contrast-enhanced qDESS compared with contrast-enhanced MRI', subject: "Research Focus", text: 'Patients with different degrees of radiographic knee OA were included prospectively. All underwent MRI with both qDESS and contrast-enhanced T1-weighted magnetic resonance imaging (CE-MRI). A linear combination of the two qDESS images can be used to create an image that displays contrast between synovium and the synovial fluid. Synovitis on both qDESS and CE-MRI was assessed semi-quantitatively, using a whole-knee synovitis sum score, indicating no/equivocal, mild, moderate, and severe synovitis.', button: 'Learn More', details: 'Longer description 1', },
    { img: featureImage2, alt: 'Description 2', title: 'Non-contrast MRI of synovitis in the knee using quantitative DESS', subject: "Research Focus", text: 'Twenty-two knees (11 subjects) with moderate to severe osteoarthritis (OA) were scanned using CE-MRI, qDESS with a high diffusion weighting (qDESSHigh), and qDESS with a low diffusion weighting (qDESSLow).', button: 'Learn more', details: 'Longer description 2' },
    { img: featureImage3, alt: 'Description 3', title: 'Bone-cartilage mismatch in the medial tibial plateau: A MRI study', subject: "Research Focus", text: 'Bone-cartilage mismatch is a variation in which the surface curvature of the articular cartilage is incongruent with the curvature of the underlying subchondral bone. The purpose of this study is to investigate the prevalence of this variant in the medial tibial plateau (MTP) and examine potential association with clinical findings and intra-articular derangements using MRI.', button: 'Learn more', details: 'Longer description 3' }
  ];
  return (
    <main className={styles.main}>

      <VideoSplash />
      <Funding />
      <Features features={features} />

    </main>
  )
}
