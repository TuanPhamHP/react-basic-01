// dir: ~/src/components/TodoList.jsx
import React from 'react';
import Todo from './Todo.js';
function TodoList() {
	// sử dụng Boootstrap 5 để dựng UI.
	return (
		<div className='card col-12 col-md-4 col-lg-3'>
			<Todo content={'Đánh răng rửa mặt'} isDone={true} />
			<Todo content={'Tập thể dục'} isDone={false} />
		</div>
	);
}

export default TodoList;
