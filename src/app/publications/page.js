import Citation from '../components/Citation';
import styles from './Publications.module.css';
import data from '../data.json';



export default function PublicationsPage({ siteName, links }) {

  const publications= data.publications;


    return (
        <div id="publications" className={styles.publications_container}>

          <div className={styles.publications_inner}>
            <div className={styles.text_block}>
              <h3>Research</h3>
              <h1>Publications</h1>
              <p>
                Due to publisher restrictions, PDF versions of some articles can only be shared by email and cannot be posted online. Please{' '}
                <a href="sigmud@lipsum.ca">email me</a> to request a copy of any article not linked below.
              </p>
            </div>
            <div className={styles.publications_block}>
              {publications.map((publication, index) => {
                if (publication.hasOwnProperty('download')) {
                  return (
                    <div className={styles.publication} key={index}>
                      <a href={publication.download}>
                        99
                      </a>
                      <Citation citation={publication} />
                    </div>
                  );
                } else {
                  return (
                    <div className={styles.publication} key={index}>
                      <div className={styles.no_download}></div>
                      <Citation citation={publication} />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      );
}