import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { Layout } from './routes/Layout';
import { LandingPage } from './routes/LandingPage';
import { AboutPage } from './routes/about/AboutPage';
import { ProjectsPage } from './routes/projects/ProjectsPage'

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Layout /> }>
          <Route index element={<LandingPage />} />

          <Route path='about' element={<AboutPage />} />
          <Route path='projects' element={<ProjectsPage />} />
        </Route>


        <Route path='*' element={<h1>404 Not Found</h1> } />

      </Routes>
    </Router>
  );
}

export default App;
