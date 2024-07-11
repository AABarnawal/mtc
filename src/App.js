import Navbar from './Components/Navbarcom';
import './App.css';
import MyFooter from './Components/Footer';
import MainPage from './Home/MainPage';
import Contact from './Home/Resources/Contact';
import Resources from './Home/Resources/Resources';
import Gallery from './Home/Resources/Gallery';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { useEffect, useState } from 'react';
import DashBoard from './Dashboard/DashBoard';
import ChildRegistration from './childRegistration/ChildRegistration';
import AddChild from './childRegistration/AddChild';
import DailyWeight from './dailyWeight/DailyWeight';
import MandA from './MandA/MandA';
import WeightDetails from './dailyWeight/WeightDetails';
import MandADetails from './MandA/MandADetails';
import Maternal from './Maternal/Maternal';
import MaternalForm from './Maternal/MaternalForm';
import store from './redux/store';
import { Provider } from 'react-redux';
import Discharge from './Discharge/Discharge';
import DischargeForm from './Discharge/DischargeForm';
import Followup from './Followup/Followup';
import FollowupForm from './Followup/FollowupForm';
import LoginPageList from './Popups/LoginPageList';
import Nopage from './NoPage/Nopage';
function App() {
  const [LoginStatue, setLogstatus ] = useState(true);
  const Change = () =>{
    setLogstatus(false)
  }
 useEffect(()=>{
  if(sessionStorage['value']){
    Change();
  }
 })
 return(
  <Provider store={store}>
    <div className="App">
      {/* login and no login nav bar */}
      <Navbar Loginstatus={LoginStatue} />

      <separator style={{marginTop:"2000px"}} ><br/><br/><br/><br/><br /> <br/> <br/></separator>
      <HashRouter>
      <Routes>
          {LoginStatue ? (
            <Route path="/mtc"> 
              <Route path="*" element={<MainPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Resources/ShowResource" element={<Resources />} />
              <Route path="/Resources/Gallery" element={<Gallery />} />
              <Route path="/Resources/Contact" element={<Contact />} />
              <Route path="/login" element={ <LoginPageList />} />
            </Route>
          ):(
          <Route path="/mtc">
            <Route  path="/DashBoard" element={ <DashBoard />} />
            <Route  path="/DashBoard/ChildRegistration" element={ <ChildRegistration />} />
            <Route  path="/DashBoard/DailyWeight" element={ <DailyWeight/> } />
            <Route  path="/DashBoard/WeightDetails" element={ <WeightDetails name="Weight Details" /> } />
            <Route  path="/DashBoard/MandA" element={ <MandA/> } />
            <Route  path="/DashBoard/MandADetails" element={ <MandADetails  name="Micronutrients & Antibiotics"  />} />
            <Route  path="/DashBoard/Maternal" element={ <Maternal />} />
            <Route  path="/DashBoard/MaternalForm" element={ <MaternalForm  name="Maternal Nutrition" />} />
            <Route  path="/DashBoard/AddChild" element={ <AddChild /> } />
            <Route  path="/DashBoard/Discharge" element={ <Discharge/> } />
            <Route  path="/DashBoard/DischargeForm" element={ <DischargeForm />} /> 
            <Route  path="/DashBoard/Followup" element={ <Followup />} />
            <Route  path="/DashBoard/FollowupForm" element={ <FollowupForm/>} />
            
            {/*<Route path="/DashBoard/ChildRegistration" element={ <ChildRegistration />} />
            <Route path="/DashBoard/ChildRegistration" element={ <ChildRegistration />} /> */}
          </Route>
          ) }
        
      </Routes>
    </HashRouter>
    <separator style={{marginTop:"2000px"}} ><br/><br/><br/><br/><br /> <br/> <br/></separator>
      <MyFooter isLogin={LoginStatue}  />

      
      {/* <Login /> */}
      
    </div>
  </Provider>
  );
}

export default App;
