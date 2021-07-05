<script>
  import { wordCount, elapsedTime } from "./store.js";
</script>

<div class="column grid">
  <span class="wc">Word Count: {$wordCount}</span>
  <span class="time">Elapsed Time: {$elapsedTime}</span>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
  }

  .wc {
    text-align: left;
  }

  .time {
    text-align: right;
  }
</style>
