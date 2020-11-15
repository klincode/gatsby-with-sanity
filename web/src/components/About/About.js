import React from 'react'
import styles from '../../css/about.module.scss'
// import about1 from '../../assets/card_project_rank.png'
import about1 from '../../assets/about.jpg'

import arrow from '../../assets/arrow.png'
import backgroundElement from '../../assets/left_decoration.png'
const About = () => {
  return (
    <section>
      <img className={styles.backgroundElement} src={backgroundElement} alt="" />
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <img src={about1} alt="Project ranking image" />
            {/* <img src={about2} alt="Team image" /> */}
          </div>

          <div className={styles.right}>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid aspernatur eligendi, molestiae labore adipisci fuga reprehenderit officia tempora iste quos provident, laborum enim nihil? Maxime excepturi vel dolorem earum repellat delectus inventore ad! Accusamus doloremque explicabo facilis vero temporibus natus tenetur perspiciatis, qui voluptatum repudiandae quos nesciunt aut, tempora ipsum eveniet accusantium, ea consequuntur a sunt neque veniam. Magnam assumenda ipsam voluptates molestiae labore itaque quibusdam, eaque reiciendis pariatur sequi ratione non. Eos itaque iusto omnis aspernatur ipsam reiciendis ea maiores, pariatur tempore asperiores tempora culpa architecto beatae reprehenderit neque, repellat dignissimos! Voluptates, consectetur fugit repudiandae fugiat atque magni.</p>
            <a href="#">Learn more <img src={arrow} alt="" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
