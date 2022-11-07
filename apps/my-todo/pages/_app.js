import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../store/configureStore';
import { QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { TodosProvider } from '../context/todo';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <TodosProvider>
        <Component {...pageProps} />
      </TodosProvider>
    </Provider>
  );
}

export default MyApp;
