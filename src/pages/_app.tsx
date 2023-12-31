import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <>
  <Component {...pageProps} />
  <ToastContainer />
  </>
}

export default App