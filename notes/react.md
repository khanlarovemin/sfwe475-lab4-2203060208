# React notes — Lab 4

## 1. Props vs state (Strand 1)

`title` is a prop: it is passed in by the parent (`App`) and belongs to the parent, so `TaskCard` can only read it, never change it. `done` is now state created with `useState` inside `TaskCard`, so the card owns it and can update it with `setDone`, which makes React re-render the card. In short, props are inputs from outside, while state is the component's own data that changes over time.
