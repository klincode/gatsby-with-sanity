import React from 'react'
import company_1 from '../../assets/companies/Booking.com_logo.png'
import company_2 from '../../assets/companies/Cartoon_Network_logo.png'
import company_3 from '../../assets/companies/Dropbox_logo.png'
import company_4 from '../../assets/companies/Toshiba_logo.png'
import company_5 from '../../assets/companies/coca-cola.png'
import company_6 from '../../assets/companies/netflix-2.png'
import company_7 from '../../assets/companies/redbull.png'
import company_8 from '../../assets/companies/slack.png'
import company_9 from '../../assets/companies/spotify-1.png'
import styles from '../../css/header.module.scss'

const Companies = () => {
  return (
    <div className={styles.companyLinks}>
      <ul className={styles.items}>
        <li><a href="#"><img src={company_1} alt="" /></a></li>
        {/* <li><a href="#"><img src={company_2} alt="" /></a></li> */}
        <li><a href="#"><img src={company_3} alt="" /></a></li>
        <li><a href="#"><img src={company_4} alt="" /></a></li>
        <li><a href="#"><img src={company_5} alt="" /></a></li>
        <li><a href="#"><img src={company_6} alt="" /></a></li>
        {/* <li><a href="#"><img src={company_7} alt="" /></a></li> */}
        <li><a href="#"><img src={company_8} alt="" /></a></li>
        <li><a href="#"><img src={company_9} alt="" /></a></li>
      </ul>    </div>
  )
}

export default Companies
