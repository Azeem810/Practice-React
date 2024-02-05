import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from "./Components/Header";
import Register from "./Components/Register";
import Search from "./Components/Search";
import Counter from "./Components/Counter";
import Table from "./Components/Table";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Carousel from "./Components/Carousel";
import Home from "./Components/Home";
 
  const NotFound = ()=>{
    return(
        <h1 style={{textAlign:'center',margin:'20% auto'}}>No Page Found</h1>
    )
}


function App() {
  return (
    
    <Router>
    <Header/>
    <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/table" element={<Table/>}/>
        <Route path="/carousel" element={<Carousel/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;


