import { BrowserRouter } from "react-router-dom";

// import "./styles/landingpage.css";
import './styles/global.css';
import './App.css'
import PageRoutes from "./routes";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <PageRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
