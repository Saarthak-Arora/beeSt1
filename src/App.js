import NavBar from "./component/NavBar";
import {
  BrowserRouter
} from "react-router-dom";


function App() {
  return (
    <>
     <BrowserRouter>
        <NavBar  />
    </BrowserRouter> 
    </>
  );
}

export default App;
