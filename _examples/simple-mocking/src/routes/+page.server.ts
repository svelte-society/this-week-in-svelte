import { get_data } from '$data';

export function load() {
	return {
		post: get_data()
	};
}
