# mentor notes on DOM & JS homework

### What's been useful when supporting students on exercises?

- **Build a static mockup first!** 
  - I'll normally have the students first make a prototype static html version of the expected output, based on their interpretation of the homework's written task
  - Do they agree? Give them time to discuss it and convince each other. If they all agree on the same wrong question interpretation, I'll be tempted to aim for that rather than correct them - knowing the learning objectives is important here.
  - Normally I'll have them do this mockup on codepen, or somewhere quite distinct from their programmatically-constructed work so they don't mix them up.
- **GIVE them the intended HTML!** 
  - I'd much prefer the exercise provided these mock-ups up-front, so the student can focus on the programming task. They waste a lot of time trying to interpret ambiguous task statements, and I'm sure volunteers also waste a lot of time trying to write them clearly, too. Picture is worth a 1000 words.
- **DOM Tree diagram**:
  - I'll have (or I'll help) the students draw the _intended_ DOM tree based on their static HTML prototype. By hand is best (https://autodraw.com is quick and simple).
  - I'll have the students draw the starting DOM diagram (often the exercise has a starting div element into which the students will append created elements)
  - I'll show the students how I think of createElement and appendElement working - the former creating an element that is imagined but not yet attached to the tree
  - I'll stress that only those elements attached somehow to the tree will be shown.
  - ![pic of DOM tree diagram](dom-tree-diagram2.png)
  - ![pic of DOM tree diagram](dom-tree-diagram3.png)


- **Element view in dev tools**:
  - This will come in particularly useful when the students are debugging the addition of elements which are invisible due to missing text content.
- **Decomposition**:
  - Guide the students in breaking down the task into smaller steps, including learning experiments not directly contributing to the final wanted HTML.
  - With each subtask, prepare starting and target versions of HTML prototype codepen, and the starting version of the DOM tree diagram.
- **Use ALL of the representations**:
  - Get students to work through making the changes to the static HTML prototype (codepen) and then their DOM tree diagram, talking through the operations they need (creating an element, appending an element (where?)).
  - get commitment to predictions at each point.
  - Be wary of overwhelming the students with too many representations, but if they've met all of these individually with the exception of the DOM tree diagram, I have only seen struggling students embrace these different views and benefit from them. Certainly let them choose the ones that work best for them. Whatever helps them to reason about the task, their code, and the changes they need to make to it.
