import Vue from 'vue';
import Editor from '../../../src/Editor.vue';
import { getElement } from '../../test_helper.js';

describe('Editor.vue', () => {
  beforeEach(function() {

  });

  afterEach(function() {

  });

  it('Sets placeholder text', () => {
    expect(Editor.data().placeholder).toBe('This is placeholder text.');
  });

  it('Works some more magic', () => {
    const textarea = getElement(Editor).querySelector('textarea');
    expect(textarea.textContent).toEqual(Editor.data().placeholder);
  });
});
