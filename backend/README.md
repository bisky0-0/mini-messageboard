# Mini Message Board

A simple message board application built with Node.js, Express, and EJS.

## Features

- View all messages
- Add new messages
- View message details by ID

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/mini-message-board.git
   cd mini-message-board
   ```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the server:**

```bash
Copy code
npm start
```

4. **Access the application:**

Open your browser and go to http://localhost:8000.

5. **Project Structure**
   mini-message-board/
   ├── controllers/ # Route controllers
   │ ├── all.js # Display all messages
   │ ├── form.js # Render form to add a new message
   │ └── new.js # Handle new message submissions
   ├── views/ # EJS templates
   │ ├── all.ejs # View for all messages
   │ ├── form.ejs # View for adding a new message
   │ └── messageDetails.ejs # View for message details by ID
   ├── public/ # Static files (CSS)
   │ └── styles.css # Basic styling
   ├── app.js # Main application file
   ├── .gitignore # Git ignore file
   └── package.json # Project metadata and dependencies

In this version, the bash commands are properly formatted as code blocks, ensuring they are clearly distinguis
