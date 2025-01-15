import Home from './Pages/home';
import { Route, Routes } from 'react-router-dom';
import './Stylesheets/index.scss';
import PrivacyPolicy from './Pages/privacy-policy';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
