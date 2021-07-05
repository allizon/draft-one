<script>
  import { PENDING, STARTED, PAUSED, DONE, editorState } from "./store.js";

  let currentEditorState;
  const unsubscribe = editorState.subscribe(value => {
    currentEditorState = value;
  });

  const setEditorState = () => {
    switch (currentEditorState) {
      case PENDING:
        editorState.set(STARTED);
        return;

      case STARTED:
        editorState.set(PAUSED);
        return;

      case PAUSED:
        editorState.set(STARTED);
        return;
    }
  };

  const updateWordCount = e => {
    console.log(e);
  };

  $: getLabel = () => {
    switch ($editorState) {
      case PENDING:
        return "Start";

      case STARTED:
        return "Pause";

      case PAUSED:
        return "Resume";

      default:
        break;
    }
  };
</script>

<div class="block column">
  <div class="is-centered">
    <button on:click="{setEditorState}">{getLabel()}</button>
    <button>start over</button>
    <button>settings</button>
  </div>
  <textarea name="" id="" cols="30" rows="10" on:keyup="{updateWordCount}"
  ></textarea>
</div>

<style>
  textarea {
    height: 600px;
    width: 100%;
  }
</style>
