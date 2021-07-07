import { elapsedTime, slackerTime } from "./store";

let timer;

let notUsed;

export const startTimer = () => {
  timer = setInterval(() => {
    elapsedTime.update(val => val + 1);
    // slackerTime.update(val => val + 1);
  }, 1000);
};

export const pauseTimer = () => {
  clearInterval(timer);
};
