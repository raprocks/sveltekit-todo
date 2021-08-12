<script context="module">
	console.log('hi');
</script>

<script lang="ts">
	import TodoList from '$lib/components/TodoList.svelte';
	import { createTodoStore } from '$lib/stores/stores';
	import type { TodoType } from '$lib/stores/stores';
	import { browser } from '$app/env';
	let defaultval: TodoType[];
	if (browser) {
		if (localStorage.todos) {
			defaultval = JSON.parse(localStorage.getItem('todos'));
		}
	}
	$: console.log(defaultval);
	const store = createTodoStore(defaultval || []);
	// store.subscribe((value) => {});
	if (browser) {
		store.subscribe((value) => {
			value && localStorage.setItem('todos', JSON.stringify($store));
		});
	}
</script>

<TodoList
	todos={$store}
	addFunc={store.add}
	deleteFunc={store.delete}
	updateStatus={store.updateStatus}
/>
