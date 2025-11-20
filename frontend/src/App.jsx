import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Default from './components/default.jsx'
import SignupPage from './components/signup.jsx'
import LoginPage from './components/login.jsx'
function App() {

  return (
    <>
<BrowserRouter>
<Routes>

  <Route path='/' element={
    <Default>
      <SignupPage />
    </Default>
  } />
  <Route path='login' element={
    <Default>
      <LoginPage />
    </Default>
  } />
  

</Routes>
</BrowserRouter>


    </>
  )
}

export default App
