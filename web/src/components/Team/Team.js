import React from 'react'
import styles from '../../css/team.module.scss'
// import about1 from '../../assets/card_project_rank.png'
import about1 from '../../assets/card_team.jpg'
import arrow from '../../assets/arrow.png'
import TopEarners from './TopEarners'
const Team = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <h2>Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid aspernatur eligendi, molestiae labore adipisci fuga reprehenderit officia tempora iste quos provident, laborum enim nihil? Maxime excepturi vel dolorem earum repellat delectus inventore ad! Accusamus doloremque explicabo facilis vero temporibus natus tenetur perspiciatis, qui voluptatum repudiandae quos nesciunt aut, tempora ipsum eveniet accusantium, ea consequuntur a sunt neque veniam. Magnam assumenda ipsam voluptates molestiae labore itaque quibusdam, eaque reiciendis pariatur sequi ratione non. Eos itaque iusto omnis aspernatur ipsam reiciendis ea maiores, pariatur tempore asperiores tempora culpa architecto beatae reprehenderit neque, repellat dignissimos! Voluptates, consectetur fugit repudiandae fugiat atque magni.</p>
            <a href="#">Learn more <img src={arrow} alt="" /></a>
          </div>
          <div className={styles.right}>
            <TopEarners />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Team
