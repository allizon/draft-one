<script>
  export let label;
</script>

<div class="row">
  <div class="label">{label}:</div>
  <div class="field">
    <slot>Row</slot>
  </div>
</div>

<style>
  div.row {
    display: grid;
    grid-template-columns: 3fr 7fr;
  }

  div.label {
    text-align: right;
    font-weight: bold;
    padding: 0.25rem 0.5rem;
  }

  div.field {
    text-align: left;
    padding: 0.25rem 0.5rem;
  }
</style>

