# useForm Hook

A custom React hook for managing form state in functional components. This hook provides an easy way to handle form input values and their changes.

<br/>
<br/>
<br/>

## Installation

You can install the `use-form-hook` package via npm:

```bash
npm install @yourusername/use-form-hook
```

<br/>
<br/>
<br/>

## Returns

The `useForm` hook returns an object with the following properties:

- **input**: &nbsp;The current state of the form inputs.
- **handleInputChange**: &nbsp;A function to handle input changes.

<br/>
<br/>
<br/>

## Usage

Here’s how to use the `useForm` hook in your React component:

```javascript
import React from "react";
import useForm from "@yourusername/use-form-hook";

const MyForm = () => {
  const { input, handleInputChange } = useForm({ name: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleInputChange}
          id="name"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleInputChange}
          id="email"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
```

<br/>
<br/>
<br/>
