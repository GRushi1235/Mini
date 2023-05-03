import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Get from './Components/MyList'
import Eg from './Eg/Eg'

function App(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Eg />}  />
          <Route path="/home" element={<Get />} />
        </Routes>
      </BrowserRouter>
     
    

    );
}


export default App;