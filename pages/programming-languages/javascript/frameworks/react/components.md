# React Components

Once an element is created, it cannot be mutated.

## Kinds

### Functional components

```js
import React from "react";
import ReactDOM from "react-dom";

const ChildComponent = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  );
};

const ParentComponent = () => {
  return (
    <div>
      <ChildComponent name="John" age="30" />
      <ChildComponent name="Mary" age="25" />
    </div>
  );
};
```

### Pure components

Pure components are the components which render the same output for the same state and props. In function components, you can achieve these pure components through memoized React.memo() API wrapping around the component. This API prevents unnecessary re-renders by comparing the previous props and new props using shallow comparison.

```js
import { memo, useState } from 'react';

const EmployeeProfile = memo(function EmployeeProfile({ name, email }) {
  return (<>
        <p>Name:{name}</p>
        <p>Email: {email}</p>
        </>);
});
```

In class components, the components extending React.PureComponent instead of React.Component become the pure components. When props or state changes, PureComponent will do a shallow comparison on both props and state by invoking shouldComponentUpdate() lifecycle method.

### Controlled components

A component that controls the input elements within the forms on subsequent user input is called Controlled Component, i.e, every state mutation will have an associated handler function.

For example, to write all the names in uppercase letters, we use handleChange as below,

```js
handleChange(event) {
  this.setState({value: event.target.value.toUpperCase()})
}
```

The Uncontrolled Components are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

### Higher-Order Components

A higher-order component (HOC) is a function that takes a component and returns a new component.

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

HOC can be used for many use cases:

i. Code reuse, logic and bootstrap abstraction.
ii. Render hijacking.
ii. State abstraction and manipulation.
iii. Props manipulation.

```js
function HOC(WrappedComponent) {
  return class Test extends Component {
    render() {
      const newProps = {
        title: "New Header",
        footer: false,
        showFeatureX: false,
        showFeatureY: true,
      };

      return <WrappedComponent {...this.props} {...newProps} />;
    }
  };
}
```
