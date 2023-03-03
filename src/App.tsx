import React from 'react';
import Header from './components/header';
import Bottom from './components/bottom';
import Home from './screens/home';
import Blog from './components/body/components/blog';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: '/blogs',
      element: <Blog />
    }
  ]);

  return (
    <React.StrictMode>
      <Header set={(e) => console.log('Setting new Value: ',e)} />
      <RouterProvider router={router} />
      <Bottom />
    </React.StrictMode>
  )
}

export default App;
