import {Routes, Route} from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillPage from './pages/SkillPage';
import InterestPage from './pages/InterestPage';
import AwardsPage from './pages/AwardsPage';



function App() {
  return (
  <div>
    <NavbarComponent />

    <Routes>
      <Route path='/' Component={HomePage} />
      <Route path='/about' Component={AboutPage} />
      <Route path='/experience' Component={ExperiencePage} />
      <Route path='/skill' Component={SkillPage} />
      <Route path='/interest' Component={InterestPage} />
      <Route path='/Awards' Component={AwardsPage} />
    </Routes>

    <FooterComponent />
  </div>
  );
}

export default App;
