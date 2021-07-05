<script>
  import Editor from "./Editor.svelte";
  import Stats from "./Stats.svelte";
</script>

<svelte:head>
  <title>Draft One v2304</title>
</svelte:head>

<main>
  <header>Draft One v2304</header>
  <div class="columns is-centered">
    <div class="column is-two-thirds">
      <Stats />
      <Editor />
    </div>
  </div>
  <footer>footer go here</footer>
</main>

<style>
  header {
    height: 144px;
    background-color: antiquewhite;
    margin-bottom: 2rem;
  }

  main {
    text-align: center;
    margin: 0 auto;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
