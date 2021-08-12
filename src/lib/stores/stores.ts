import { writable, Writable } from 'svelte/store';
export interface TodoType {
	id: number;
	title: string;
	isCompleted: boolean;
}
export type TodoStore = {
	subscribe: Writable<Array<TodoType>>['subscribe'];
	set: Writable<Array<TodoType>>['set'];
	update: Writable<Array<TodoType>>['update'];
	add: (newTodo: TodoType) => void;
	delete: (id: TodoType['id']) => void;
	updateStatus: (id: TodoType['id']) => void;
};
export function createTodoStore(default_val: Array<TodoType>): TodoStore {
	const { set, subscribe, update } = writable<Array<TodoType>>(default_val);
	return {
		subscribe,
		set,
		update,
		add: (newTodo) => {
			update((todos: TodoType[]) => [...todos, newTodo]);
		},
		delete: (id) => {
			update((old) => {
				const newList = old.filter((todo) => todo.id !== id);
				return newList;
			});
		},
		updateStatus: (id) => {
			update((old) => {
				return old;
			});
		}
	};
}
