import React from "react";
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <h1>My Blog</h1>
      </div>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <a href="/" style={styles.navLink}>
              all Blogs
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="/posts" style={styles.navLink}>
              Posts
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="/contact" style={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div style={styles.userprofile}>
        <div>
            <button> <Link to='/login'> {'Login'} </Link></button>
            <button> <Link to={'/signup'}> {'Signup'} </Link></button>
        </div>
        <div>
             <h2>{"user login"}</h2>
        </div>
      </div>
    </header>
  );
};

// Inline styles for simplicity
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#31B665",
    color: "white",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  navItem: {
    textDecoration: "none",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    transition: "color 0.3s",
  },
  navLinkHover: {
    color: "#ddd",
  },
};

export default Header;
