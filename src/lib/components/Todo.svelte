<script lang="ts" context="module">
	import type { TodoType } from '$lib/stores/stores';
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let todo: TodoType;
	function updateStatus(e) {
		todo.isCompleted = !todo.isCompleted;
		dispatch('updateStatus', {
			todo
		});
	}
	export let deleteFunc;
</script>

<div class="todo" class:done={todo.isCompleted}>
	{todo.title}
	<input
		type="checkbox"
		name="todostatus"
		on:click={updateStatus}
		id="todostatus"
		bind:checked={todo.isCompleted}
	/>
	<button on:click={deleteFunc}>Delete</button>
</div>

<style lang="scss">
	// .done {
	// 	background-color: red;
	// }
	// .todo {
	// 	display: flex;
	// 	justify-content: space-between;
	// 	align-items: center;
	// 	border: 1px dotted beige;
	// 	#todostatus {
	// 		width: 18px;
	// 		height: 18px;
	// 	}
	// }
</style>
