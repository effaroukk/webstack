# Digital Diary

A simple yet powerful web-based personal journal application that allows users to securely log their thoughts, track moods, and customize their experience.

## Features

- **User Authentication**: Secure registration and login with JWT authentication.
- **Journal Entries**: Create, update, and delete diary entries.
- **Mood Tracking**: Monitor daily moods and track emotional trends.
- **Customization**: Personalize the diary with themes and settings.
- **Responsive Design**: Fully responsive for all devices.
- **Data Security**: Protected with encryption and authentication.
- **Optional Features**: Image/video uploads and Google Calendar integration (future scope).

---

## Tech Stack

### Frontend:
- React.js (UI framework)
- React Router (Navigation)
- Axios (HTTP requests)
- Webpack (Module bundler)

### Backend:
- Node.js (Runtime environment)
- Express.js (Web framework)
- MongoDB (Database)
- Mongoose (ODM)
- JSON Web Tokens (Authentication)
- Dotenv (Environment management)

---

## Project Setup

### Prerequisites
Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MongoDB](https://www.mongodb.com/)
- npm or yarn package manager

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/yourusername/digital-diary.git
cd digital-diary
```

#### 2. Install dependencies

**Frontend:**
```bash
cd client
npm install
```

**Backend:**
```bash
cd server
npm install
```

#### 3. Environment variables
Create a `.env` file inside the `server` directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

#### 4. Running the project

**Start backend server:**
```bash
cd server
npm run dev
```

**Start frontend app:**
```bash
cd client
npm start
```

Open the app in your browser at `http://localhost:3000`

---

## Folder Structure

```
 digital-diary/
  ├── client/       # Frontend (React)
  │   └── src/
  │       ├── components/
  │       ├── pages/
  │       └── App.js
  ├── server/       # Backend (Node.js/Express)
  │   ├── models/
  │   ├── routes/
  │   └── server.js
  ├── .gitignore
  ├── README.md
  └── package.json
```

---

## API Endpoints

### Auth Routes
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Journal Routes
- `POST /api/entries` - Create new entry
- `GET /api/entries` - Get all entries
- `PUT /api/entries/:id` - Update an entry
- `DELETE /api/entries/:id` - Delete an entry

---

## Future Improvements
- Add rich text editor for diary entries
- Integrate with Google Calendar for reminders
- Implement AI-based sentiment analysis
- Enable dark/light mode switching

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Open a pull request

---

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact
If you have any questions or suggestions, feel free to reach out:

- GitHub: [yourusername](https://github.com/yourusername)
- Email: your-email@example.com


