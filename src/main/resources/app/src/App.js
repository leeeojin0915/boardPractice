import './App.css';
import {BrowserRouter} from "react-router-dom";
//BrowserRouter -> HTML5를 지원하는 브라우저 주소 감지
//Routes ->
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Router from "./router/Router.js";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
                <Router/>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
