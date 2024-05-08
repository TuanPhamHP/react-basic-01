import React, { useState, useEffect } from 'react';
import DefaultLayout from './components/layouts';
import HomePage from './pages/HomePage';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [anotherFlag, setAnotherFlag] = useState(false);

	const toggleLogin = newValue => {
		setIsLoggedIn(newValue);
	};

	return (
		<div className='App'>
			<DefaultLayout>
				<HomePage />
			</DefaultLayout>
		</div>
	);
}

export default App;

// nếu người dùng chưa đăng nhập
// => form đăng nhập + ẩn <Header></Header>

// nếu người dùng đã đăng nhập
// =>  message Xin chào User + <Header></Header>
