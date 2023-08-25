# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  to make sure the output is correct in what we're trying to achieve

- What is the purpose of events and event handling?
  to have things happen in the system we're trying to occur

- Are all possible parameters required to use a JavaScript method or function?
  depends if it's an optional parameter or a mandatory parameter

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener

- What is a callback function?
  a function that is passed as an argument to another function

- What object is passed into an event listener callback when the event fires?
  the event that's trying to be accomplished

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  it's the target of the object event you passed into an event listener call back. You can check by console.log(even.target). MDN

- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  The first is the function handleClick will happen with the event click is preformed.
  The second addEventListener immediately calls the function handleClick when the page is loaded.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
