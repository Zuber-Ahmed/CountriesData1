import { CourseData } from './components/CourseData/CourseData';
import { FetchedData } from './components/FetchedData';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { CourseDetails } from './components/CourseData/CourseDetails';


function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to My Weather App </h1>
      <FetchedData/> */}
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<CourseData/>}/>
        <Route path='/coursedetails' element={<CourseDetails/>}/>
      </Routes>
      </BrowserRouter>
      {/* <CourseData/> */}
    </div>
  );
}

export default App;
