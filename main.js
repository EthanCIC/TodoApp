
var submitBtn = document.getElementById('submit-btn');
var result = document.getElementById('result');
submitBtn.addEventListener('click', function(e) {
	var todoInput = document.getElementById('todo-input').value;
	if (todoInput !== "") {
		var todo = document.createElement('LI');
		todo.innerHTML = todoInput + '<button>X</button>';
		result.appendChild(todo);
		document.getElementById('todo-input').value = '';
	} else {
		alert('請輸入待辦事項！');
	}
});

result.addEventListener('click', function(e) {
	console.log(e.target.parentNode.parentNode);
	e.target.parentNode.parentNode.removeChild(e.target.parentNode);
})