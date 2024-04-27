import React, { useState } from 'react';

export default function LoginForm() {
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
	return (
		<div className='container px-5 py-5'>
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
			<button className='btn btn-primary' onClick={logForm}>
				Check Form
			</button>
			<p>Xin chào {formState.username}, </p>
			<p>Mật khẩu người dùng {formState.password}</p>
		</div>
	);
}
