<template>
	<div class="d1__editor">
		<h3>The Editor Component!!</h3>
		<button
			id="start"
			@click="startTimer()">Start</button>
		<button
			id="stop"
			@click="stopTimer()">Stop</button>
		<Timer />
		<textarea>{{ placeholder }}</textarea>
	</div>
</template>

<script>
import { mapMutations } from 'vuex';
import Timer from './Timer.vue';

export default {
	components: {
		Timer
	},

	methods: {
		...mapMutations([
			'startTimer',
			'stopTimer',
		])
	},

	data () {
		return {
			placeholder: 'This is placeholder text.',
			timeInSeconds: 0
		}
	}
}
</script>
