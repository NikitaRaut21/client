import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from './views/Home/Home';
import AddPlant from './views/AddPlant/AddPlant';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"*",
    element:<h1>404 Not found</h1>
  },
  {
    path:"/add",
    element:<AddPlant/>
  }
])
root.render((<div>
<RouterProvider router={router}/>

</div>));

