


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


function App() {
  

  return (

    <BrowserRouter>
    <Header />
    <Routes>
      <Route path ="/" element={<HomePage/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/signupasadmin" element={<SignUpAsAdmin/>}></Route>
      <Route path="/signupasresident" element={<SignUpAsResident />}></Route>
        <Route path='/getIssues' element={<ComplaintCard />} />
        <Route path="/login" element={<LogIn />}></Route>
        <Route path='/loginasresident'  element={<LogInAsResident />}/>
      <Route path="/loginasadmin" element={<LogInAsAdmin/>} />
  
    </Routes>  
    </ BrowserRouter >
  )
}

export default App
