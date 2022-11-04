# React Hooks

- useState : 
  The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.

- useReducer : useReducer provides more predictable state transitions than useState , which becomes more important when state changes become so complex that you want to   have one place to manage state, like the render function

- useEffect : The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating   the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects

- useRef : The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be   used to access a DOM element directly.
