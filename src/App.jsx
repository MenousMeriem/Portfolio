
import Layout from './Components/Layout/Layout'
import Accueil from './Pages/Accueil'


import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Accueil/>}/>
      </Route >
      
));

function App() {
  return (
    <div className=''>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App
