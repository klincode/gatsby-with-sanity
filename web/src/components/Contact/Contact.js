import React from 'react'
import Form from '../Contact/Form'
import styles from '../../css/contact.module.scss'
import bg_decortation from '../../assets/left_bottom_decoration.png'
const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className="container">
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi earum, iusto optio aut necessitatibus consectetur deserunt in exercitationem quidem? Magnam.</p>
        <Form />
      </div>
      <img src={bg_decortation} alt="" className={styles.bgDecoration} />
    </section>
  )
}

export default Contact
