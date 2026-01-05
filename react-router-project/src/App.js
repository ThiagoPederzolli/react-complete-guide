import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import ProductDetailsPage from './pages/ProductDetails';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// )

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        // path: ''
        index: true, element: <HomePage />
      },
      {
        path: 'products', element: <ProductsPage />,
      },
      {
        path: 'products/:productId', element: <ProductDetailsPage />,
      },
    ],
    errorElement: <ErrorPage />
  }
  
]);

// const router = createBrowserRouter(routeDefinitions);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
