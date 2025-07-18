import { Link } from "react-router-dom";
import styles from "./Header.module.css"

function Header() {
  return (
    <header className= {styles.Header} >
      <h1>DevMax Solutions</h1>
      <nav>
        <ul>
          <li><Link to ="/home" > Home  </Link></li>

          <li><Link to="/sobre">Sobre</Link></li>
          
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;