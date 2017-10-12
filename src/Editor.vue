<template>
	<div class="d1__editor">
		<h3>The Editor Component!!</h3>
		<textarea>{{ placeholder }}</textarea>
	</div>
</template>

<script>
export default {
	data () {
		return {
			placeholder: 'This is placeholder text.'
		}
	}
}
</script>
