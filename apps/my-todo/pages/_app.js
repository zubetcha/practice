import '../styles/globals.css'
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from '../store/configureStore';

function MyApp({ Component, pageProps }) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </BrowserRouter>
  ) 
}

export default MyApp
