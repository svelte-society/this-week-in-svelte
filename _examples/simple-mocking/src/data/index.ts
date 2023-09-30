export function get_data() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json());
}
