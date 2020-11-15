import React from 'react'
import card_1 from '../../assets/banner_card_1.jpg';
import card_2 from '../../assets/banner_card_2.jpg';
import card_3 from '../../assets/banner_card_3.jpg';
import card_4 from '../../assets/banner_card_4.jpg';
import styles from '../../css/header.module.scss'
const Cards = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.card}><img src={card_3} alt="Card" /></div>
      <div className={styles.card}><img src={card_2} alt="Card" /></div>
      <div className={styles.card}><img src={card_4} alt="Card" /></div>
      <div className={styles.card}><img src={card_1} alt="Card" /></div>


    </div>
  )
}

export default Cards
