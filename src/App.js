import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

// import "./styles/landingpage.css";
import './styles/global.css';
import './App.css'
import PageRoutes from "./routes";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./helpers/ScrollToTop";


function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <PageRoutes />
          <Footer />
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
