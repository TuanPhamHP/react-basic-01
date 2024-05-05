// dir: ~/src/components/Todo.jsx
import React from 'react';
function Todo({ content, isDone }) {
	// sử dụng Boootstrap 5 để dựng UI.

	return <span className={`badge ${isDone ? 'bg-success' : 'bg-warning'}`}>{content}</span>;
}

export default Todo;
// true: success
// false: warning

// a ? b : c

// if (a) {
//   b
// }else{
//   c
// }
// isWork ? 'class-a b c' : 'class-d e f'
