# Task Tracker Application Design and Documentation

## Objective

### To develop a Task Tracker Application that allows users to manage their tasks efficiently. The application will include features such as task creation, updating, deletion, and marking tasks as completed. The backend will be developed using Java with Spring Boot, while the frontend will be built using ReactJS.

## Backend Design

### Project Setup

1. We have created a Java project using Spring Boot.
2. we started with setting up a virtual environment for development.

### Database

### Task Model


[Image: task tracker Model databases.png]

1. We have design a model for tasks with the following fields:

    * `id`: Unique identifier for the task
    * `title`: Title of the task
    * `description`: Description of the task
    * `dueDate`: Due date for the task
    * `completed`: Boolean flag indicating whether the task is completed or not

### RESTful API Endpoints

1. RESTful API endpoints for CRUD operations on tasks:

    * `GET /tasks`: Retrieve all tasks
    * `POST /tasks`: Create a new task
    * `GET /tasks/{id}`: Retrieve a specific task by ID
    * `PUT /tasks/{id}`: Update an existing task
    * `DELETE /tasks/{id}`: Delete a task

### Validation Mechanism

1. To implement robust validation mechanisms in order to ensure data integrity:

    * We validate required fields such as title and due date
    * We validate date format for due date
    * We Validate input length for title and description

### Error Handling

1. To implement error handling we have provided clear and informative error messages:

    * We handle validation errors with appropriate error messages
    * We handle exceptions gracefully and return meaningful error responses

### Pagination

1. To implement pagination for task retrieval to optimize performance:

    * We limit the number of tasks retrieved per request
    * We provide pagination metadata in the response for navigating through pages

### User Authentication

1. Implement user authentication using Spring Security for secure task management:

    * Secure API endpoints to require authentication
    * Implement authentication mechanisms such as JWT tokens

### Database

1. We have utilised a relational database PostgreSQL to store task information:

    * We have string relationship between data, tasks and users so we could go with something like postgres.
    * Postgres will help us to have better and faster query performance.
    * We have created a database schema for storing tasks
    * We have set up database connections and configurations in the application.

### Logging System

1. To implement a comprehensive logging system to track critical events and errors:

    * Log important events such as task creation, updates, and deletions
    * Log errors and exceptions with stack traces for debugging purposes

## Frontend Design

### Project Setup

1. Set up a project using ReactJS for the frontend.

### Components

1. Create components for the following:

    * AddTask: Component to display a list of tasks
    * Tasks: Component for creating and editing tasks
    * TaskItem: Component to display individual tasks in the list

### Functionality

1. Fetch Tasks: Implement functionality to fetch tasks from the backend API and display them in a paginated list.
2. CRUD Operations: Implement functionality to create, edit, and delete tasks with proper error handling.
3. Mark as Completed: Implement the ability to mark tasks as completed.

### Styling

1. We have styled the application for an intuitive and user-friendly interface:

    * Use CSS for styling components
    * Ensure responsive design for various screen sizes
    * Use consistent design patterns and colors for a cohesive look and feel

## Conclusion

#### This document outlines the design and requirements for the Task Tracker Application. By following these guidelines, developers can create a robust and user-friendly application that meets the specified objectives and requirements.

