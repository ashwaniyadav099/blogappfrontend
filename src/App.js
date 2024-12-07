
import ConfigRoute from './Routes/Configroutes'
import { createBrowserRouter, RouterProvider } from 'react-router';
function App() {
  const router = createBrowserRouter(ConfigRoute);

  return (
    <div >
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
