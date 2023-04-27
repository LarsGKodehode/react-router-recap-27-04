import {
    Link,
    Outlet
} from 'react-router-dom'

import styles from './Layout.module.css'

export function Layout() {
    return (
      <div className={styles.App}>
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
  
        <main className={styles.main} >
          <Outlet />
        </main>

        <footer>
            <h5>Lars G©</h5>
        </footer>
      </div>
    )
  }