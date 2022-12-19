# gradientfi-counter 
This app is created with npm and bundled with vite. It uses eslint for code quality and prettier for style consistency.
StyleComponents are used to create very minimal CSS implementation, however, the app can easily grow.
below are important scripts:

# dev: npm run dev
to server the project on your local machine

# lint: npm run lint
to find eslint issues on the project

# lint:fix: npm run lint:fix
to fix eslint issues on the project

# format: npm run format
to format the project with prettier

# Note: I will attempt to answer your questions in the app implementation;
 however, important hooks which were not used in the app will be briefly explained below:


# useEffect:
react hook to handle side effects in functional react components. Examples, make api calls on page load, or navigate on value change. 
it is called  with a dependency array which can be empty.

example:
useEffect(() => {
    user && apiCall(user);
    return cleanUp()
}, [user]);

exlanation:
the useeffect function runs once on initial render and everytime user changes, the cleanUp function is called on component unmount to avoid memory leak and error boundary issues.

# useRef:
react hook that returns a mutable ref object whose .current value is initialized to the passed agument. commonly used to handle focus on a DOM node

example:
function InputComponent() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}


# useContext, useState, useMemo and How to build react components:
This is demonstrated on this project.
However, react components could be functional (which can use hooks) or class (can only use life-circle hooks).
tree-shaking techniques are utilized to optimally integrate the various react components into a single react app.



