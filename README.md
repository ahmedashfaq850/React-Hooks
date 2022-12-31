# React Hooks

- **useState** : 
  The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.

- **useReducer** : useReducer provides more predictable state transitions than useState , which becomes more important when state changes become so complex that you want to   have one place to manage state, like the render function

- **useEffect** : The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating   the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects

- **useRef** : The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be   used to access a DOM element directly.

- **useLayoutEffect** : The useLayoutEffect hook is similar to the useEffect theme in that it fires synchronously once all DOM loading is completed, rather than asynchronous like the useEffect hook. This can be used to re-render the DOM and read its layout concurrently.

- **useContext** : Context provides a way to pass data or state through the component tree without having to pass props down manually through each nested component.

- **useMemo** : he useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running. In this example, we have an expensive function that runs on every render. When changing the count or adding a todo, you will notice a delay in execution.

- **useCallBack** : One reason to use useCallback is to prevent a component from re-rendering unless its props have changed. In this example, you might think that the Todos component will not re-render unless the todos change: This is a similar example to the one in the React.memo section.
