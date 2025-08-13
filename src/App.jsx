import React ,{ useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import CoursesPage from './Pages/CoursesPage';
import ContactPage from './Pages/ContactPage';
import AdmissionPage from './Pages/AdmissionPage';
import ChatbotComponent from './Components/Chatbot/ChatbotComponents';
import DeveloperInfoPopup from './Components/DeveloperInfo/DeveloperInfoPopup';


const App = () =>{
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
      <>
      <div>
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Saniya Sachin Korane."
          studentPhotoUrl="/public/image\WhatsApp Image 2025-08-12 at 19.41.29_179a0601.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      
      <Router>
        <div>
          <Routes id="oop">
              <Route path ="/" element={<HomePage/>}/>
              <Route path ="/AboutPage" element={<AboutPage/>}/>
              <Route path ="/CoursesPage" element={<CoursesPage/>}/>
              <Route path="/ContactPage" element={<ContactPage/>}/>
              <Route path="/AdmissionPage" element={<AdmissionPage/>}/>
          </Routes>
        
        </div>
      <ChatbotComponent/>
      </Router>
    </>
  );
};
export default App