import {
  HashRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from 'react-router-dom'

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

function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/" >Home</Link>
              <Link to="/about" >About</Link>
              <Link to="/projects" >Projects</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App;
