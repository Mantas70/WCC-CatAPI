import { Toolbar, AppBar, Container } from "@mui/material";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <AppBar className={styles.root} position="static">
      <Container className={styles.container}>
        <NavLink className={styles.navItem} to="/">
          <h2>PetBook</h2>
        </NavLink>
        <Toolbar>
          <NavLink className={styles.navItem} to="/">
            <h4>Home</h4>
          </NavLink>
          <NavLink className={styles.navItem} to="/about">
            <h4>About</h4>
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
