// css styles
import styles from '../styles/index.module.css'
// import components
import Card from '../components//works' // work experiences
import Contact from '../components/contact'
import Head from 'next/head'
// import hooks
import React , {useState} from 'react'
const mysite = () => {
  const [title , changeTitle] = useState('fullstack Developer')
  return(
    <>
      <Head>
        <title>Hiradsajde - personal site</title>
        <meta charSet="utf8"></meta>
      </Head>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.title}>Hi! my name's Hiradsajde, i'm {title}</h1>
        </div>
        <div className={styles.main}>
        <Card/>
        </div>
        <div className={styles.main}>
        <Contact/>
        </div>
      </div>
    </>
  )
}
export default mysite