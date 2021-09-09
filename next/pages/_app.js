import { observer } from 'mobx-react-lite'
import '../styles/style.css'    

function App ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default observer(App)

