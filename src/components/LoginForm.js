import React, { useState } from 'react';
// destructoring syntax
export default function LoginForm({ brand, setNewBrand, children }) {
	const [formState, setFormState] = useState({
		username: 'Tuấn',
		password: '',
	});

	const logForm = () => {
		console.log(formState);
	};

	const handleFormChange = event => {
		const target = event.target;
		// lấy value hiện tại
		console.log(target.value);
		// Lấy trường cần tác động tới
		const key = target.name;
		// update giá trị value vào state formState;
		setFormState({
			...formState, // spread syntax
			[key]: target.value,
		});
	};

	const submitForm = event => {
		event.preventDefault();
	};

	const updateBrand = () => {
		setNewBrand('haha');
	};

	return (
		<div className='container px-5 py-5'>
			<form action='' onSubmit={submitForm}>
				<div className='mb-3'>
					<label htmlFor='formGroupExampleInput' className='form-label'>
						Tài khoản
					</label>
					<input
						value={formState.username}
						type='text'
						className='form-control'
						id='formGroupExampleInput'
						placeholder='Example input placeholder'
						name='username'
						onChange={handleFormChange}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='formGroupExampleInput2' className='form-label'>
						Mật khẩu
					</label>
					<input
						defaultValue={formState.password}
						type='text'
						className='form-control'
						id='formGroupExampleInput2'
						placeholder='Another input placeholder'
						name='password'
						onChange={handleFormChange}
					/>
				</div>
				<button className='btn btn-primary' type='submit' onClick={logForm}>
					Check Form
				</button>
			</form>
		</div>
	);
}
