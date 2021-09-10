import '../styles/style.css'    

function App ({ Component, pageProps }) {
  console.log(Component, pageProps)
  return <Component {...pageProps} />
}

export default App

