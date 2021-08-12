<script lang="ts">
	import Todo from '$lib/components/Todo.svelte';
	import type { TodoStore, TodoType } from '$lib/stores/stores';
	export let todos: TodoType[];
	export let addFunc: TodoStore['add'];
	export let deleteFunc: TodoStore['delete'];
	export let updateStatus: TodoStore['updateStatus'];
	let textval: string;
</script>

<ul>
	<input type="text" bind:value={textval} />
	<button
		on:click|preventDefault={() => {
			if (textval) {
				addFunc({ title: textval, isCompleted: false, id: todos.length + 1 });
			}
		}}>Add Todo</button
	>
	{#each todos as todo (todo.id)}
		<li>
			<Todo
				{todo}
				on:updateStatus={(e) => updateStatus(e.detail.todo.id)}
				deleteFunc={() => deleteFunc(todo.id)}
			/>
		</li>
	{/each}
</ul>

<style lang="scss">
	// ul {
	// 	width: 100%;
	// 	list-style-type: none;
	// }
</style>
