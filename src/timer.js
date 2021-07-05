import { editorState, elapsedTime } from "./store";

let timer;

export const startTimer = () => {
  timer = setInterval(() => {
    elapsedTime.update(val => val + 1);
  }, 1000);
};

export const pauseTimer = () => {
  clearInterval(timer);
};
