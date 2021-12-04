import styles from "./styles.module.css";
import AnimalList from "../AnimalList";
import Header from "../Header";
import About from "../About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Header />
        <Routes>
          <Route path="/" element={<AnimalList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
