import { Outlet } from 'react-router-dom';
import './styles/flexgrid.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
        <ScrollToTop />
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  );
}

export default App;
