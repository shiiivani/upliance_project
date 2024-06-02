# React Project Assignment Report

## Table of Contents

1. [Introduction](#introduction)
2. [Project Overview](#project-overview)
3. [Component Structure](#component-structure)
   1. [Counter Component](#counter-component)
   2. [User Data Form](#user-data-form)
   3. [Rich Text Editors](#rich-text-editors)
4. [State Management](#state-management)
5. [Routing](#routing)
6. [Conclusion](#conclusion)

---

## Introduction

This project is a React-based web application designed to demonstrate the use of various technologies and libraries such as Material UI and React Router. The main functionalities include a counter component, a user data form, and rich text editors with data persistence.

## Project Overview

The application consists of three main features:

- A counter component that allows users to increment, decrement, and reset a count value while visualizing the count through a dynamic background color using a Bezier curve.
- A user data form for collecting and storing user information, with auto-generated user IDs and data persistence using local storage.
- Rich text editors that allow users to visualize and format their data with bold, italic, underline, and list options, with data persistence.

A navbar is used to navigate between the pages of the application.

## Component Structure

### Counter Component

- **Counter**: The main component that includes buttons for incrementing, decrementing, and resetting the count. It also visualizes the count through a dynamic background color using a Bezier curve.
- **State Management**: The `useState` hook is used to manage the count state. The background color level is adjusted based on the count value.

### User Data Form

- **UserForm**: A form component that collects user data (name, address, email, phone). It auto-generates a user ID and saves data to local storage on form submission.
- **Popup**: A customized popup using Material UI to alert users about unsaved changes when they try to leave the form without saving.
- **State Management**: The `useState` hook is used to manage form inputs and handle unsaved changes. The `useEffect` hook is used to detect and warn about unsaved changes.

### Rich Text Editors

- **RichTextEditor**: A component that uses React Quill for rich text editing, allowing users to format text and visualize user data. It includes data persistence through local storage.
- **State Management**: The `useState` hook is used to manage the editor content. The `useEffect` hook is used to load saved content from local storage on component mount.

## State Management

### Counter Component

Uses the `useState` hook for managing the count state. The background color level is dynamically adjusted based on the count using a Bezier curve.

### User Data Form

Uses the `useState` hook for managing form input states and the `useEffect` hook for handling unsaved changes. Data is persisted using local storage.

### Rich Text Editors

Uses the `useState` hook for managing the editor content state. The `useEffect` hook is used to load and save content to local storage, ensuring data persistence.

## Routing

React Router is used to navigate between different pages of the application. The main routes include:

- `/` for the Counter page
- `/form` for the User Data Form
- `/textEditor` for the Rich Text Editor

Routes are defined using the `Router`, `Routes`, and `Route` components from React Router. A navbar provides easy navigation between these routes.

## Conclusion

This project demonstrates the effective use of React and various libraries to create a dynamic and interactive web application. The component structure and state management choices ensure a modular and maintainable codebase. The use of React Router provides smooth navigation between different features, while local storage ensures data persistence across sessions.
