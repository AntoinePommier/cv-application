# CV Builder (React)

This project is a **CV / Resume builder application** built with React.  
It was developed as part of the **React curriculum from The Odin Project**.

Exercise source:  
https://www.theodinproject.com/lessons/node-path-react-new-cv-application

The goal of the assignment is to practice **state management, component architecture, and dynamic rendering in React** by building an application where users can edit CV information and see the result update in real time.

---

## Features

- Live CV preview that updates while editing the form
- Collapsible sidebar sections for editing CV data
- Dynamic rendering of CV sections (education, experience, etc.)
- Conditional display of fields when data exists
- Clean printable CV layout (A4 format)

---

## What I Practiced / Learned

This project helped reinforce several key React concepts.

### Component Architecture

- Splitting the UI into reusable components
- Passing data between parent and child components using **props**

### State Management

- Storing CV data in a central state
- Updating nested objects in state
- Using functional state updates (`prev => ...`)

### Controlled Inputs

- Form inputs controlled by React state
- Real-time updates of displayed data

### Dynamic Rendering

- Rendering lists using `.map()`
- Using `key` props for list items
- Conditional rendering of elements

### UI Behavior

- Implementing an **accordion interface** for form sections
- Managing which section is open through shared state

Only the corresponding form section is expanded.

### Styling

- CSS layout using **Flexbox** and **Grid**
- Structuring CV entries with grid layout
- Designing a clean printable CV format
- Using **React Icons** for contact information
