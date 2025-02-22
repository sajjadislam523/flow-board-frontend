# Flow Board

## Short Description

This is a clean, minimalistic task management application that allows users to add, edit, delete, and reorder tasks using a drag-and-drop interface. Tasks are organized into three categories: **To-Do**, **In Progress**, and **Done**. Changes are saved instantly to a MongoDB database, and user authentication is handled via Firebase (Google sign-in). The application is fully responsive for both desktop and mobile devices.

## Live Links

-   **Live Demo:** [https://your-live-demo-link.com](https://flowboard-5e2cc.web.app/)
-   **GitHub Repository:** [https://github.com/yourusername/task-management-app](https://github.com/yourusername/task-management-app)

## Dependencies

This project uses the following dependencies:

-   **@radix-ui/react-slot:** ^1.1.2
-   **@tanstack/react-query:** ^5.66.7
-   **axios:** ^1.7.9
-   **class-variance-authority:** ^0.7.1
-   **clsx:** ^2.1.1
-   **firebase:** ^11.3.1
-   **lucide-react:** ^0.475.0
-   **prop-types:** ^15.8.1
-   **react:** ^18.3.1
-   **react-beautiful-dnd:** ^13.1.1
-   **react-dom:** ^18.3.1
-   **react-hot-toast:** ^2.5.2
-   **react-icons:** ^5.5.0
-   **react-router-dom:** ^7.2.0
-   **tailwind-merge:** ^3.0.1
-   **tailwindcss-animate:** ^1.0.7

## Installation Steps

1.  **Clone the Repository:**
    git clone https://github.com/sajjadislam523/flow-board-frontend
    cd frontend

2.  **Install Frontend Dependencies:** Navigate to the frontend directory and install dependencies:
    cd frontend
    npm install

3.  **Set Up Environment Variables for Frontend:**
    Create a .env file in the frontend root directory and add your Firebase configuration and other environment variables:

        VITE_apiKey=your_api_key
        VITE_authDomain=your_project.firebaseapp.com
        VITE_projectId=your_project_id
        VITE_storageBucket=your_project.appspot.com
        VITE_messagingSenderId=your_sender_id
        VITE_appId=your_app_id
        VITE_URL=http://localhost:5000

4.  **Run the Frontend Application:**

    npm run dev
