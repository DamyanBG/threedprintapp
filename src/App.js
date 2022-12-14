import Register from './components/user/Register';
import { Routes, Route, Link } from "react-router-dom"
import Login from './components/user/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/products/Products';
import ModeratorLogin from './components/user/ModeratorLogin';
import AdministratorLogin from './components/user/AdministratorLogin';
import CreateProduct from './components/products/CreateProduct';
import CreateWorker from './components/user/CreateWorker';
import Container from 'react-bootstrap/esm/Container';
import { UserProvider } from './context/UserProvider';
import ProductDetails from './components/products/ProductDetails';

function App() {
  return (
    <div>
      <UserProvider>
        <Header/>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="register" element={<Register />} />.
              <Route path="create-worker" element={<CreateWorker />} />.
              <Route path="login" element={<Login />} />
              <Route path="moderator/login" element={<ModeratorLogin />} />
              <Route path="admin/login" element={<AdministratorLogin />} />
              <Route path="products" element={<Products />} />
              <Route path="product-details" element={<ProductDetails />} />
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
