<script>
  import {
    PENDING,
    STARTED,
    PAUSED,
    DONE,
    editorState,
    wordCount,
  } from "./store.js";

  let textareaValue;

  const setEditorState = () => {
    switch ($editorState) {
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

  // Very simple word count function that probably needs tweaking
  const countWords = str => str.trim().split(/\s+/).length;

  const updateWordCount = e => {
    // console.log(e.key);
    wordCount.set(countWords(textareaValue));
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
  <textarea
    name=""
    id=""
    cols="30"
    rows="10"
    on:keyup="{updateWordCount}"
    bind:value="{textareaValue}"></textarea>
</div>

<style>
  textarea {
    height: 600px;
    width: 100%;
  }
</style>
