import Image from "next/image.js";
import team from "../team.json";
import styles from "./Team.module.css";

export default function Team({ siteName, links }) {
  return (
    <div className={styles.team}>
        
      <div className={styles.join_banner}>
        <button className={styles.join_button}>Join</button>
      </div>
      <div className={styles.value_text}>
        <div className={styles.value_text_inner}>
          <h1>Who We Are</h1>
          <h2>Our values</h2>
          <p>
            We provide state-of-the-art facilities and resources to ensure our
            students develop a strong foundation in mechanical engineering
            principles and practical skills. Our research activities address
            real-world challenges, promote sustainability, and drive innovation.
            We actively collaborate with industry partners to bridge academia
            and the real world. We instill ethics and social responsibility in
            our students, and we prioritize their needs and professional growth.
            Through outreach, we inspire future engineers and contribute to
            societal betterment.
          </p>
          <h2>Our mission</h2>
          <p>
            Through interdisciplinary collaboration, cutting-edge research, and
            industry partnerships, our mission is to advance the field of
            mechanical engineering through specialized research and innovation
            in quantitative magnetic resonance imaging (qMRI) and its
            applications in osteoarthritis, ultrashort echo time MRI with FUSE,
            MRI-safe loading device design, and imaging biomechanics.
          </p>
          <h2>Our team</h2>
        </div>
      </div>
      <div className={styles.team_container}>
        <div className={styles.team_inner}>
          {team.map((member, index) => {
            if (member.active === true && member.collaborator === false) {
              return (
                <div key={index} className={styles.team_member}>
                  <div className={styles.image_container}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      className={styles.team_image}
                      width={400}
                      height={600}
                    />
                  </div>
                  <div className={styles.text}>
                    <h3>{member.name}</h3>
                    <span className={styles.position}>{member.position}</span>
                    <p>{member.description}</p>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className={styles.collaborators_container}>
        <div className={styles.collaborators_inner}>
          <div className={styles.collaborators_text}>
            <h2>Collaborators</h2>
            <div className={styles.collaborators_list}>
              {team.map((member, index) => {
                if (member.active === true && member.collaborator === true) {
                  return (
                    <div key={index} className={styles.collaborators_member}>
                      <div className={styles.text}>
                        <span>
                          <a href={member.url}>
                            <h3>{member.name}</h3>
                          </a>
                        </span>
                        ({member.institution})
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.past_container}>
        <div className={styles.past_inner}>
          <div className={styles.past_text}>
            <h2>Past Members</h2>
            <div className={styles.past_list}>
              {team.map((member, index) => {
                if (member.active === false && member.collaborator === false) {
                  return (
                    <div key={index} className={styles.past_member}>
                      <div className={styles.text}>
                        <span>
                          <a href={member.url}>
                            <h3>{member.name}</h3>
                          </a>
                        </span>
                        ({member.position}, {member.institution})
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
