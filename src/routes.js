// Xử lí các công việc liên quan đến phân trang
// VD: binding components
// Check PrivateRoute

import { createBrowserRouter, createRoutesFromElements, Route, Routes, RouterProvider } from 'react-router-dom';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import App from './App';
import NotFound from './pages/NotFound';
import DetailProduct from './pages/DetailProduct';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/danh-sach-san-pham',
		element: <HomePage />,
	},
	{
		path: '/lien-he',
		element: <Contact />,
	},
	{
		path: '/danh-sach-san-pham/:productId',
		element: <DetailProduct />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

export default routes;

// React context - useContext - global store
// PrivateRoute
