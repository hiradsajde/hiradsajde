import styles from '../styles/socials.module.css'
const socials = () => {
    return (
        <div className={styles.main}>
            <div className={styles.card}>
                <img src="/images/hiradsajde.jpeg"/>
                <div className={styles.icons}>
                    <a href="https://github.com/hiradsajde" target="_blank"><img src="/images/github.svg"></img></a>
                    <a href="https://instagram.com/hirad.rs" target="_blank"><img src="/images/instagram.svg"></img></a>
                    <a href="https://t.me/sojdei" target="_blank"><img src="/images/telegram.svg"></img></a>
                    <a href="https://wa.me/message/BHXBCUGBGD2JO1" target="_blank"><img src="/images/whatsapp.svg"></img></a>
                </div>
            </div>
        </div>
    )
}
export default socials