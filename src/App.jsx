import Navbar from "./navbar/Navbar";

//redux
import { Provider } from "react-redux";
import store from "./redux";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home"
import {navArrayLinks} from "./constants/menu"
import Formulario from "./pages/formulario/Formulario";
import Deportes from "./pages/deportes/Deportes";

function App() {
  
    
  return (
    <>
      <Provider store={store}>
        <Navbar navArrayLinks={navArrayLinks} />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/deportes" element={<Deportes/>}/>
          <Route path="/form" element={<Formulario/>}/>
        </Routes>
          
      </Provider>
    </>
  );
}

export default App;
