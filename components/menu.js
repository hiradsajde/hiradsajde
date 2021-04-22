import styles from '../styles/menu.module.css'
import Link from 'next/link'
const Menu = (props) => {
    return (
        <ul className={`${styles.mainUl} normal-font`}>
            <div className={styles.mainItems}>
                <Link href="/"><li>Home</li></Link>
                <Link href="/socials"><li>Socials</li></Link>
            </div>
            <li className={styles.logo}>
                <Link href="/"><img src="/images/logo.png"></img></Link>
            </li>
        </ul>
    )
}
export default Menu