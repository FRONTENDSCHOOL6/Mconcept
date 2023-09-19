import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';

// 컴포넌트 경로
import Header from '@/layout/Header';
import Login from '@/pages/Login';
import Mainpage from '@/pages/Mainpage';
import Join from '@/pages/Join';
import Detail from '@/pages/Detail';
import RootLayout from '@/layout/RootLayout';
// 컴포넌트 경로

const router = createBrowserRouter(
	createRoutesFromElements(
		// 경로 설정 하는 부분
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Mainpage />} />
			<Route path="join" element={<Join />} />
			<Route path="login" element={<Login />} />
			<Route path="products/:id" element={<Detail />} />
		</Route>,
	),
);

export default router;
