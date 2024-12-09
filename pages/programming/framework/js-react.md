# React

## Concepts

### Virtual DOM

Reconciliation is the process through which React updates the Browser DOM and makes React work faster.

It uses Virtual DOM instead of Real DOM.

### Refs

The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.

Ref forwarding is a feature that lets some components take a ref they receive, and pass it further down to a child.

### Portals

Portal is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

```js
ReactDOM.createPortal(child, container);
```

### Error boundaries

Error boundaries are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

A class component becomes an error boundary if it defines a new lifecycle method called componentDidCatch(error, info) or static getDerivedStateFromError().
