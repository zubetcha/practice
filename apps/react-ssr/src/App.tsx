import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';
import { Route, Routes } from 'react-router-dom';

const Home = loadable(() => import(/* webpackChunkName: "Home" */ './pages/Home'));
const Detail = loadable(() => import(/* webpackChunkName: "Home" */ './pages/Detail'));

export default function App() {
  return (
    <>
      <Helmet>
        <title>App</title>
      </Helmet>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </>
  );
}
