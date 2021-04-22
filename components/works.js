import styles from '../styles/works.module.css'
const Card = () => {
    return (
        <div className={styles.works}>
            <div className={styles.card}>
                <img src="/images/logo.png"/>
                <p className={styles.place}>iTLog.ir <span>CEO</span><br/>
                <div className={styles.time}>2021-2020</div>
                </p>
            </div>
            <div className={styles.card}>
                <img src="/images/logo.png"/>
                <p className={styles.place}>iTLog.ir <span>CEO</span><br/>
                <div className={styles.time}>2021-2020</div>
                </p>
            </div>
            <div className={styles.card}>
                <img src="/images/logo.png"/>
                <p className={styles.place}>iTLog.ir <span>CEO</span><br/>
                <div className={styles.time}>2021-2020</div>
                </p>
            </div>
        </div>
    )
}
export default Card