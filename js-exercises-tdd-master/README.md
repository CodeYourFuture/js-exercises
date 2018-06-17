# README

## Before you start

First step is to `fork` this repo to your account, then `clone` it locally.

After you do that, `add a remote` to point to CodeYourFuture repo, that will allow you to update you forked copy when we update the repo with more exercises.

This is the command to run
`git@github.com:CodeYourFuture/js-exercises-tdd.git`

**Always work on a branch not on master!**

## How to run the tests
Once you cloned the repo, first, run `npm install`.

To run the tests from the console, run the command: `npm test` 
To keep the tests running (auto updating when you save files), run the command: `npm test -- --watch` then press `a` to run all the tests and keep watching the files for changes. To quit the tests, type `q`.

To run a specifc test, do: `npm test -- filname` for example `npm test -- remove-vowels` (that will run only the files that matches remove-vowels, i.e. remove-vowels.test.js)

### Write Tests
The first set of exercises involve implemented code that we will add tests for. You can run only the tests in the *I.write-tests* folder by running `npm test -- write-tests` or you can run them with a watch with `npm test -- write-tests --watch`

Think about **edge cases** while writing tests.

### Pass Tests
The second set of exercises involve a set of tests that we will write code to make it pass. You can run only the tests in the *I.pass-tests* folder by running `npm test -- pass-tests` or you can run them with a watch with `npm test -- pass-tests --watch`.

Once a test passes. Add another test for another test case, preferably another **edge case** to make sure your code is not *buggy*. 
