# React Testing Workshop

This workshop demonstrates a brief introduction to testing React components, comparing two of the most widely-used libraries:

- **Enzyme**
- **React Testing Library**

## Overview

Testing is an essential part of modern web development, especially with complex React components. There are multiple approaches for testing React applications, and this workshop is designed to help you understand the differences between **Enzyme** and **React Testing Library** by exploring practical code examples for each.

## Project Structure

The repository is split into two main folders, each showing a different approach:

- [`enzyme-example/`](./enzyme-example): Contains sample tests using Enzyme.
- [`rtl-example/`](./rtl-example): Contains sample tests using React Testing Library.

Both folders are bootstrapped with [Create React App](https://github.com/facebook/create-react-app) for consistency and ease of comparison.

## Getting Started

To run the examples, navigate into either `enzyme-example` or `rtl-example` and follow the standard Create React App commands:

```bash
cd enzyme-example   # or rtl-example
npm install
npm test
```

## What You'll Learn

- **Enzyme:**  
  Learn how to use Enzyme’s APIs like `shallow`, `mount`, and querying for component internals.

- **React Testing Library:**  
  Learn to test components the way users interact with them, focusing on accessibility and best practices.

## Why Compare?

- **Enzyme** allows for deep component inspection and manipulation but can encourage testing implementation details.
- **React Testing Library** promotes tests that are closer to user interactions and is recommended by the React team.

## Additional Resources

- [Enzyme Documentation](https://enzymejs.github.io/enzyme/)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)

---

Feel free to open issues or PRs to suggest improvements to this workshop!
