<template>
	<div class="d1__editor">
		<h3>The Editor Component!!</h3>
		<button id="start">Start</button>
		<button id="stop">Stop</button>
		<Timer />
		<textarea>{{ placeholder }}</textarea>
	</div>
</template>

<script>
import Timer from './Timer.vue';

export default {
	components: {
		Timer
	},

	data () {
		return {
			placeholder: 'This is placeholder text.',
			timeInSeconds: 0
		}
	}
}
</script>
