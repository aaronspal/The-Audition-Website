import { Outlet } from 'react-router-dom';
import './styles/flexgrid.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/ScrollToTop";
import NewsTerminal from "./components/newsTerminal/newsTerminal";
import { NewsTerminalProvider } from "./context/newsTerminalContext";

function App() {
  return (
    <NewsTerminalProvider>
      <div className="App">
          <ScrollToTop />
          <Header/>
          <Outlet/>
          <Footer/>
          <NewsTerminal/>
      </div>
    </NewsTerminalProvider>
  );
}

export default App;
