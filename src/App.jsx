
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import MainLayout from './Layouts/MainLayout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';

function App() {
const router = createBrowserRouter([
  {path: '', element: <MainLayout/>, children: [
    {path: '', element: <Home/>},
    {path: 'home',  element: <Navigate to={'/'}/>},
    {path: 'about', element: <About/>},
    {path: 'portfolio', element: <Portfolio/>},
    {path: 'contact', element: <Contact/>},
    {path: '*', element: <NotFound/>},
  ]}
])
  return (
      <RouterProvider router={router} />
  )
}

export default App
