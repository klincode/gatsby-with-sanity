import React from 'react'
import styles from '../../css/team.module.scss'
import employee_1 from '../../assets/top_earner_1.png'
import employee_2 from '../../assets/top_earner_2.png'
import employee_3 from '../../assets/top_earner_3.png'
import employee_4 from '../../assets/top_earner_4.png'

const TopEarners = () => {
  return (
    <div className={styles.employees}>
      <h3>Top Earners</h3>
      <h4>Ranking</h4>
      <ol>
        <li>1.
          <img src={employee_1} alt="Employee" />
          <div className={styles.employeeData}>
            <span className={styles.employee}>Janusz Kowalski</span>
            <span className={styles.sallary}>$1093.45</span>
          </div>
        </li>
        <li>2.
          <img src={employee_2} alt="Employee" />
          <div className={styles.employeeData}>
            <span className={styles.employee}>Tadeusz Kowalski</span>
            <span className={styles.sallary}>$5093.45</span>
          </div>
        </li>
        <li>3.
          <img src={employee_3} alt="Employee" />
          <div className={styles.employeeData}>
            <span className={styles.employee}>Jonathan Davis</span>
            <span className={styles.sallary}>$2093.45</span>
          </div>
        </li>
        <li>4.
          <img src={employee_4} alt="Employee" />
          <div className={styles.employeeData}>
            <span className={styles.employee}>Brian Davis</span>
            <span className={styles.sallary}>$093.45</span>
          </div>
        </li>
      </ol>
    </div>
  )
}

export default TopEarners
