import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <ul className='blog-container'>
            <li>
                <h2>What is the purpose of react router?</h2>
                <p>React Router simplifies navigation in React applications, offering a declarative approach to define routes and associated components. It supports nested and dynamic routing, integrates seamlessly with browser history, and enables code splitting for improved performance. With a component-based structure, it allows developers to organize views hierarchically. React Router also facilitates transition effects and provides navigation lifecycle hooks, enhancing user experience and control over route behaviors. Overall, React Router is crucial for building single-page applications, streamlining navigation, and optimizing the user interface in React-based web development.</p>
            </li>
            <li>
                <h2>How does context api works?</h2>
                <p>The Context API in React provides a way to share state across components without prop drilling. It involves creating a context with `createContext` and using `Provider` to wrap components that need access to the shared state. Consumers access this state using `useContext` or by wrapping components with `Consumer`. This simplifies state management, especially in deeply nested components, enhancing code readability and maintainability by avoiding the need to pass props through intermediate components. The Context API streamlines global state handling, making it a powerful tool for managing shared data in a React application.</p>
            </li>
            <li>
                <h2>What is useRef hook?</h2>
                <p>The `useRef` hook in React is a functional component feature that creates a mutable object called a "ref," persisting across renders without triggering re-renders. It's commonly used to access and interact with DOM elements directly, manage focus, or store mutable values that don't trigger component re-rendering. Unlike state, changes to a `useRef` value do not cause component re-renders, making it useful for scenarios where you need to maintain and modify values without affecting the rendering lifecycle. This hook is instrumental in handling imperative actions and maintaining state that shouldn't trigger a UI update in React applications.</p>
            </li>
        </ul>
    );
};

export default Blog;