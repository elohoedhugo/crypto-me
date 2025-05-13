import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Login from './components/login/Login'
import OTP from './components/otp/OTP'

function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route path='/' index element={<Login/>}/>
        <Route path='/otp' index element={<OTP/>}/>
      </Route>
    )
  )

  return (
   
      <div>
        <RouterProvider router={router}/>
      </div>
     
  )
}

export default App
