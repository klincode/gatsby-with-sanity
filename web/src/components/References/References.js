import React from 'react'
import styles from '../../css/references.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import authorImg from '../../assets/author.png'
import backgroundElement from '../../assets/bg_decoration.png'

const References = () => {
  const renderStars = (numberOfStars) => {
    const stars = [];
    for (let i = 0; i < numberOfStars; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} size="1x" color="#FFAB1A" className={styles.star} />);
    }

    return stars;
  }
  return (
    <section>
      <img className={styles.backgroundElement} src={backgroundElement} alt="" />
      <div className={styles.references}></div>
      <h2>Lorem ipsum dolor sit.</h2>
      <div className={styles.references}>
        <div className={styles.item}>
          <div>
            {renderStars(4)}

          </div>
          <div className={styles.content}>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ducimus natus atque dignissimos hic, sequi iure architecto omnis, repellendus aliquid ex ad provident  dicta sit ipsa aliquam est vitae laborum tempora sint!  qui facilis optio!"</p>
          </div>

          <div className={styles.author}>
            <img src={authorImg} alt="author" />
            <div className={styles.authorData}>
              <h3>Monika Kowalska</h3>
              <p><span>Lorem  </span>consectetur adipisicing elit.</p>
            </div>
          </div>

        </div>

        <div className={styles.item}>
          <div  >
            {renderStars(5)}
          </div>
          <div className={styles.content}>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ducimus natus atque dignissimos hic, sequi iuraliquid ex ad provident explicabo deleniti possimus voluptates non dicta sit ipsa aliquam est "</p>
          </div>
          <div className={styles.author}>
            <img src={authorImg} alt="author" />
            <div className={styles.authorData}>
              <h3>Monika Kowalska</h3>
              <p><span>Lorem  </span>consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <div  >
            {renderStars(2)}
          </div>
          <div className={styles.content}>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ducimus natus atque dignissimos hic, sequi iure architecto omnis,ossimus voluptates non dicta sit ipsa aliquam est vitae laborum tempora sint! Fugiaste, ratione rem dolores qui facilis optio!"</p>
          </div>
          <div className={styles.author}>
            <img src={authorImg} alt="author" />
            <div className={styles.authorData}>
              <h3>Monika Kowalska</h3>
              <p><span>Lorem  </span>consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default References
