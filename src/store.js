import { writable } from "svelte/store";

export const PENDING = Symbol("pending");
export const STARTED = Symbol("started");
export const PAUSED = Symbol("paused");
export const DONE = Symbol("done");

// Default values
export const editorState = writable(PENDING);
export const wordCount = writable(0);
export const elapsedTime = writable(0);
