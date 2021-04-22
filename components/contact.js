
import styles from '../styles/contact.module.css'
const Contact = () => {
    return (
        <>
        <h1 className={styles.title}>Contact me</h1>
        <form onSubmit={
            (e) => {
                e.preventDefault();
                document.querySelector('#sub').innerText = "Send success";
                document.querySelector('textarea').value = "";
                setTimeout(() => {
                    document.querySelector('#sub').innerText = "Send";
                },2000)
            }
        }>
            <div className={styles.form}>
                    <input type="text" placeholder="Your email ..."/>
                    <textarea placeholder="dibi didoo dido...."/>
                    <button type="submit" id="sub">Send</button>
            </div>
        </form>
        </>
    )
}
export default Contact