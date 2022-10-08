import Register from './components/user/Register';
import { Routes, Route, Link } from "react-router-dom"
import Login from './components/user/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import ModeratorLogin from './components/ModeratorLogin';
import AdministratorLogin from './components/AdministratorLogin';
import CreateProduct from './components/CreateProduct';
import CreateWorker from './components/CreateWorker';
import Container from 'react-bootstrap/esm/Container';
import { UserProvider } from './context/UserProvider';

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
      <UserProvider>
        <Header/>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="register" element={<Register />} />.
              <Route path="create-worker" element={<CreateWorker />} />.
              <Route path="login" element={<Login />} />
              <Route path="moderator/login" element={<ModeratorLogin />} />
              <Route path="admin/login" element={<AdministratorLogin />} />
              <Route path="products" element={<Products />} />
              <Route path="create-product" element={<CreateProduct />} />
            </Routes>
          </Container>
        </main>
        <Footer/>
      </UserProvider>
    </div>
  );
}

export default App;
