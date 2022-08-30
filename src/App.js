import Register from './components/Register';
import { Routes, Route, Link } from "react-router-dom"
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = () => {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="register" element={<Register />} />.
          <Route path="login" element={<Login />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
