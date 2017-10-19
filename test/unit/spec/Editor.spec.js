import Vue from 'vue';
import App from '../../../src/App.vue';
import Editor from '../../../src/Editor.vue';
import { getElement } from '../../test_helper.js';

describe('Editor.vue', () => {
  beforeEach(function() {

  });

  afterEach(function() {

  });

  it('Starts timer at 0', () => {
    expect(Editor.data().timeInSeconds).toBe(0);
  });

  it('Displays placeholder text in textarea to start', () => {
    const textarea = getElement(Editor).querySelector('textarea');
    expect(textarea.textContent).toEqual(Editor.data().placeholder);
  });
});


// Not only are the "Clicking..." tests failing, it's running one
// test that shouldn't even exist (Stop button Clicking start...)
// So WTF.

describe('Editor.vue: Start button', () => {
  beforeEach(function() {

  });

  afterEach(function() {

  });

  it('Has a start button', () => {
    const startButton = getElement(Editor).querySelector('button#start');
    expect(startButton).not.toBeNull();
    expect(startButton.textContent).toEqual('Start');
  });

  it('Clicking start button starts timer', () => {
    const startButton = getElement(Editor).querySelector('button#start');
    const timer = Editor.timer;
    startButton.click();
    // spy that the function ran?
    // expect timer state to be 'running'
  });
});


describe('Editor.vue: Stop button', () => {
  it('Has a stop button', () => {
    const stopButton = getElement(Editor).querySelector('button#stop');
    expect(stopButton).not.toBeNull();
    expect(stopButton.textContent).toEqual('Stop');
  });

  it('Clicking stop button stops timer', () => {
    const stopButton = getElement(Editor).querySelector('button#stop');
    const timer = Editor.timer;
    stopButton.click();
  });
});
