import React from 'react'
import styles from '../../css/features.module.scss';
import featureImage1 from '../../assets/feature_1.png'
import featureImage2 from '../../assets/feature_2.png'
import featureImage3 from '../../assets/feature_3.png'
import Jump from 'react-reveal/Jump';

const Features = () => {
  return (
    <section className={styles.features}>
      <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>

      <div className={styles.items}>
        <Jump>
          <div className={styles.item}>
            <img src={featureImage1} alt="" />
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime alias dicta excepturi illo quam quod.</p>
          </div>
        </Jump>

        <Jump>
          <div className={styles.item}>
            <img src={featureImage2} alt="" />
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime alias dicta excepturi illo quam quod.</p>
          </div>
        </Jump>
        <Jump>
          <div className={styles.item}>
            <img src={featureImage3} alt="" />
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime alias dicta excepturi illo quam quod.</p>
          </div>
        </Jump>
      </div>
    </section>
  )
}

export default Features
