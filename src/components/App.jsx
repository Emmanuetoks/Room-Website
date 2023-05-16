import RootLayout from '../layout/RootLayout'
import Slide1 from '../pages/Slide1'
import Slide3 from '../pages/Slide3'
import '../../CSS/index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Slide2 from '../pages/Slide2'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Slide1 />} />
      <Route path='2' element={<Slide2 />} />
      <Route path='3' element={<Slide3/>} />

    </Route>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App