A common use of if statements is inside of functions.

```js
function getGrade(score) {
  if (score >= 80) {
    return "A";
  }
  if (score >= 60) {
    return "B";
  }
}
```

You can also write this using `else if`:

```js
function getGrade(score) {
  if (score >= 80) {
    return "A";
  } else if (score >= 60) {
    return "B";
  }
}
```
