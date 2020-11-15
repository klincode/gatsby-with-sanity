import React from 'react'
import styles from '../../css/header.module.scss';
import companyLinks from '../../assets/company-links.png'
import Cards from './Cards'
import headerImg from '../../assets/baner_element.png';
import Form from '../Contact/Form'
import Companies from './Companies'
const Hero = () => {
  return (
    <header>
      <img className={styles.headerImage} src={headerImg} alt="" />
      <div className="container">
        <div className={styles.topLinks}>
          <a href="#" className={styles.logo}>Lorem, ipsum dolor.</a>
          <a href="#" className={styles.buttonTransparent}>Try for free</a>
        </div>

        <div className={styles.content}>
          <div className={styles.left}>

            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugit dolor consequuntur exercitationem animi non quidem quod. Voluptas explicabo omnis pariatur, adipisci id quia dolorem.</p>
            <Form />
            <Companies />

          </div>

          <div className={styles.right}>
            <Cards />
          </div>
        </div>

      </div>

    </header>
  )
}

export default Hero
