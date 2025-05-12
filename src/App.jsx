import './App.css'
import Navbar from './components/navbar/Navbar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Login from './components/login/Login'

function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route path='/' index element={<Login/>}/>
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
