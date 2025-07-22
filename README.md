# Final-Project
## Web 115 - Final Project

formClient: TaskFlow Solutions

Project: Interactive Task Manager

### 1. Project Overview

  TaskFlow Solutions, a company specializing in productivity tools, has hired you to develop a Task Manager Web Application to help users organize and track their tasks efficiently. This application will allow users to add, edit, delete, and mark tasks as important or completed. The application must be built using HTML, CSS, and JavaScript and should focus on functionality, user experience, and clean code implementation.

   Your role as the developer is to ensure that the application meets all functional requirements while maintaining best coding practices and usability.

### 2. Work Statement

  You are responsible for developing a fully functional Task Manager web application that meets the following criteria:
<ul>
  <li>The application must allow users to create, modify, and delete tasks dynamically.</li>
  <li>Tasks must be displayed in a dedicated section of the webpage using JavaScript.</li>
  <li>Tasks should be styled to indicate priority, importance, and completion status.</li>
  <li>The application must log task updates to the browser console using JSON.stringify().</li>
  <li>The final product must be visually appealing, user-friendly, and well-documented.</li>
  <li>At the end of the development process, you will submit a GitHub repository containing your project files and a link to the deployed project on the Wake Tech server.</li>
</ul>

### 3. Functional Requirements

#### 3.1 User Interface (UI) Requirements

  The Task Manager must include the following elements:
<ul>
  <li>An input field where users can enter a task name.</li>
  <li>A dropdown menu to select task priority (High, Medium, Low).</li>
  <li>A checkbox for marking a task as important</li>
  <li>A checkbox for marking a task as completed (or done).</li>
  <li>A submit button to add the task to the list.</li>
  <li>A delete button to remove the task to the list.</li>
  <li>A date to show when the task was added</li>
  <li>A div with an id of "taskmanager" where tasks will be displayed dynamically.</li>
  <li>Tasks should have the following visual styles using JavaScript .style property:</li>
</ul>
<ul>
  <li>Important tasks must be highlighted in red</li>
  <li>Completed tasks must have a strikethrough</li>
</ul>

#### 3.2 JavaScript Functionality Requirements

<ul>
  <li>Event Handling & DOM Manipulation</li>
  <li>Users should be able to submit tasks via the form.</li>
  <li>Tasks must be displayed dynamically in the #taskmanager div using .innerHTML.</li>
  <li>Users must be able to delete tasks.</li>
  <li>Users must be able to toggle task completion.</li>
  <li>Task must display the date task was added using the Date object</li>
  <li>Task Data Structure</li>

  Tasks must be stored in an array of objects with the following properties:

  ```
    {
      id: 1,
      name: "Finish JavaScript project",
      priority: "High",
      isImportant: true,
      isCompleted: false,
      date: today﻿
    }
  ```  
  <li>Conditional Logic & Styling</li>
  <li>Apply styling based on priority.</li>
  <li>Highlight important tasks in red.</li>
  <li>Apply a strikethrough to completed tasks.</li>
  <li>Console Logging</li>
  <li>Every time a task is added, updated, or deleted, the full task list must be logged in the console using:</li>
 
  ```
  console.log(JSON.stringify(tasks));
  ```

</ul>

### 4. Non-Functional Requirements

<ul>
  <li>The application must be coded using vanilla JavaScript (no external libraries or frameworks).</li>
  <li>The code must follow clean coding practices, including proper indentation, meaningful variable names, and comments.</li>
  <li>The UI should be responsive and visually intuitive.</li>
  <li>The application must prevent invalid input, such as empty task names.</li>
</ul>

### 5. Deliverables & Submission
   
#### 5.1 Deliverables

The final submission must include:
<ul>
  <li>A clickable link to your GitHub repository containing all project files.</li>
  <li>A brief reflection document (200 words) describing your approach and any challenges faced.</li>
  <li> A clickable link to your project hosted on the Wake Tech server.</li>
</ul>
