import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Main from './components/layouts/Main';
import { productsAndCartLoader } from './components/loaders/productsAndCartLoader';
import Orders from './components/Order/Orders';
import Shop from './components/Shop/Shop';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children:[
        {
          path: '/',
          element: <Shop/>,
          loader: ()=> fetch('products.json')
        },
        {
          path:'/orders',
          element: <Orders/>,
          loader: productsAndCartLoader
        },
        {
          path: '/inventory',
          element:<Inventory/>
        },
        {
          path:'/about',
          element: <About/>

        }
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router= {router}/>
    </div>
  );
}

export default App;
