import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import CalculatorPage from './pages/Calculator';
import QuotePage from './pages/Quote';
import Nav from './pages/Nav';

const App = () => (
  <div className="App">
    <Nav />
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/quote" element={<QuotePage />} />
    </Routes>
  </div>
);

export default App;
