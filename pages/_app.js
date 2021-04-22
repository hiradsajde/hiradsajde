import '../styles/globals.css'
import Menu from '../components/menu' // top menu
function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className="main">
          <Menu/>
    </div>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
