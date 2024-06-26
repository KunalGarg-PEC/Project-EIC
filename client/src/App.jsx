


import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'

import { Button } from './components/ui/button'
import SignUp from './components/SignUp'
import Header from './components/Header'
import SignUpAsAdmin from './components/SignUpAsAdmin'
import SignUpAsResident from './components/SignUpAsResident'

import ComplaintCard from './components/ComplaintCard'

import  LogIn from './components/LogIn'
import LogInAsAdmin from './components/LogInAsAdmin'
import LogInAsResident from './components/LogInAsResident'
import AfterLogInPage from './components/AfterLogInPage'
import ComplaintForm from './pages/ComplaintForm'
import Footer from './components/Footer'
import ComplaintRender from './components/ComplaintRender'
 
import About from './components/About'
import Contact from './components/Contact'



 


function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signup/admin" element={<SignUpAsAdmin />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/login/admin" element={<LogInAsAdmin />}></Route>
        <Route path="/getIssues" element={<ComplaintCard />} />
        <Route path="/signup/resident" element={<SignUpAsResident />}></Route>
        <Route path="/login/resident" element={<LogInAsResident />}></Route>
        <Route path='/resident/dashboard' element={<AfterLogInPage />} />
        <Route path='/resident/dashboard/complaint' element={<ComplaintForm />} />
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>

        <Route path='/compalintrender' element={<ComplaintRender/>}></Route>
        {/* <Route path='/resident/dashboard/:complaint' element={} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
