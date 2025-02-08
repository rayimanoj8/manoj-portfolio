import chat from './proj-images/chat.png';
import todo from './proj-images/todo.png';
import jwt from './proj-images/jwt.png';
import ds from './proj-images/ds.png';
import contact from './proj-images/contacts.png';
import em from './proj-images/event-manager.jpg';

const projects = [
    {
        title: "Messaging Application",
        description:
            "A real-time messaging app for sending text and audio messages between users. Developed using Spring Boot.",
        technologies: ["Spring Boot", "WebSocket", "React","STOMP"],
        image: chat,
        github: "https://github.com/rayimanoj8/chatting-app",
        liveDemo: "https://chat-mate-box.netlify.app/",
    },
    {
        title: "JWT Authentication System",
        description:
            "Implemented secure authentication and authorization using JSON Web Tokens (JWT). This project ensures safe access to resources by validating user tokens.",
        technologies: ["Spring Boot", "JWT", "Spring Security"],
        image: jwt,
        github: "https://github.com/rayimanoj8/JWT-Security",
        liveDemo: null,
    },
    {
        title: "Data Structures Repository",
        description:
            "A comprehensive repository of data structures implemented in Java. Includes implementations of arrays, linked lists, stacks, queues, trees, graphs, and sorting algorithms.",
        technologies: ["Java"],
        image: ds,
        github: "https://github.com/rayimanoj8/datastructures",
        liveDemo: null,
    },
    {
        title: "Contact Management System",
        description:
            "A web-based application that allows users to perform CRUD operations on accounts and contacts. It includes secure authentication using JWT.",
        technologies: ["Java", "Spring Boot", "JPA", "MySQL", "JWT"],
        image: contact,
        github: "https://github.com/rayimanoj8/contact-manager",
        liveDemo: null,
    },
    {
        title: "Event Management Application",
        description:
            "A web-based application to manage events efficiently. Users can create, update, and manage events with features like participant registration, scheduling, and notifications.",
        technologies: ["Python", "Flask", "MySQL", "HTML", "CSS"],
        image: em,
        github: "https://github.com/rayimanoj8/Event-Management-System", // Add URL if available
        liveDemo: null,
    },
    {
        title: "To-Do Management System",
        description:
            "A full-stack to-do list application where users can create, update, delete, and manage tasks. Built using Spring Boot for the backend and React for the frontend with RESTful APIs.",
        technologies: ["React", "Spring Boot", "JPA", "MySQL", "REST"],
        image: todo,
        github: "https://github.com/rayimanoj8/todo-react",
        liveDemo: "https://rayimanoj8.github.io/todo-react/",
    },
];

export {projects,chat};