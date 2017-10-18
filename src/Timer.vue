<template>
	<div class="d1__timer">
		timer
	</div>
</template>

<script>
class Timer {
	constructor () {
		console.log('new timer inside component!');
	}

	start () {
	}

	stop () {
	}

	reset () {
	}
}

export default {
	timer: new Timer()
}
</script>
