# React Components

Once an element is created, it cannot be mutated.

## Types

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
