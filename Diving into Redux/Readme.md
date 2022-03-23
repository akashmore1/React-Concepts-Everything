# Redux:

### Redux vs React Context:

While using react context, in a larger application, we can end up in deeply nested provider elements, or huge context provider component, which can affect performance.

It is officially told that we should use context for low frequency state changes.
Context is not optimized for high frequency state changes.

### How redux works?

Redux has central data(state) store.

Redux has reducer function, which which is responsible for mutating(=changing) store data.

Redux has actions which are dispatched by react components.

Actions are forworded to reducer function.

Based on these actions reducer function make changes in state in store.
