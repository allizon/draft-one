<script>
  import {
    PENDING,
    STARTED,
    PAUSED,
    DONE,
    editorState,
    wordCount,
  } from "./store.js";

  import { startTimer, pauseTimer } from "./timer";

  let textareaValue;
  $: readonly = $editorState !== STARTED;

  const setEditorState = () => {
    switch ($editorState) {
      // PENDING -> STARTED
      case PENDING:
        editorState.set(STARTED);
        startTimer();
        return;

      // STARTED -> PAUSED (todo: depending on the button)
      case STARTED:
        editorState.set(PAUSED);
        pauseTimer();
        return;

      // PAUSED -> STARTED (todo: depending on the button)
      case PAUSED:
        editorState.set(STARTED);
        startTimer();
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

  $: getTextareaClass = () => {
    switch ($editorState) {
      case PAUSED:
      case PENDING:
        return "paused";
    }
  };
</script>

<div class="block column">
  <div class="is-centered">
    <button on:click="{setEditorState}">{getLabel()}</button>
    <button>settings</button>
  </div>
  <textarea
    cols="30"
    rows="10"
    class="{getTextareaClass()}"
    readonly="{readonly}"
    on:keyup="{updateWordCount}"
    bind:value="{textareaValue}"></textarea>
</div>

<style>
  textarea {
    height: 600px;
    width: 100%;
  }

  .paused {
    background-color: lightgray;
  }
</style>
