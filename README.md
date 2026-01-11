📋 Project Overview :Role-Based Enterprise Task & Workflow with role-based authentication, user management, and content management capabilities. Built with React.js frontend and Node.js/Express backend.

🏗️ Architecture
Frontend (React.js)
Framework: React 18 with React Router DOM v6

UI Library: Ant Design v5

State Management: Redux Toolkit

Build Tool: Create React App / Vite

Backend (Node.js/Express)
Runtime: Node.js

Framework: Express.js

Database: MongoDB with Mongoose ODM

Authentication: JWT (JSON Web Tokens)

Email Service: Nodemailer

📁 Project Structure
text
blog-management-system/
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Layout/
│       │   ├── ProtectedRoute/
│       │   └── Common/
│       ├── pages/
│       │   ├── Login/
│       │   ├── Dashboard/
│       │   ├── Posts/
│       │   └── Users/
│       ├── redux/
│       │   ├── store.js
│       │   ├── slices/
│       │   └── actions/
│       ├── services/
│       │   ├── api.js
│       │   └── auth.js
│       └── utils/
│           ├── constants.js
│           └── helpers.js
│
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── adminController.js
│   │   └── postController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Post.js
│   │   └── Permission.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── cors.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── adminRoutes.js
│   │   └── postRoutes.js
│   ├── services/
│   │   └── emailService.js
│   └── config/
│       └── database.js
│
└── README.md
🚀 Features
🔐 Authentication & Authorization
Multi-role login system (Super Admin, Manager, Employee, Viewer)

JWT-based authentication with refresh tokens

Role-based permissions and access control

Session management with localStorage

📊 Dashboard
Real-time statistics and analytics

Recent activities log

System status monitoring

Quick action buttons based on user role

📝 Blog Management
Create, read, update, delete (CRUD) posts

Post status management (Draft, Published, Archived)

Post categorization with tags and departments

Rich text editor support

👥 User Management
User registration and profile management

Role assignment and permission management

User activity tracking

Department-based user organization

👥 User Roles & Permissions
Role	Dashboard	Posts	Users	Permissions
Super Admin	Full Access	CRUD	CRUD	All permissions
Manager	View	CRUD (No delete)	View only	Limited management
Employee	View	CRU (No delete)	No access	Content creation
Viewer	View	Read only	No access	Basic viewing
🔑 Test Credentials
Email	Password	Role	Color Code
rahul.kumar@crm.com	12345	Super Admin	Green (#52c41a)
priya.sharma@crm.com	12345	Manager	Blue (#1890ff)
rohan.verma@crm.com	12345	Employee	Orange (#faad14)
saiTeja@crm.com	12345	Viewer	Purple (#722ed1)
🛠️ Installation & Setup
Prerequisites
Node.js (v16 or higher)

MongoDB (v4.4 or higher)

npm or yarn

Backend Setup
Clone the repository

bash
git clone <repository-url>
cd blog-management-system/backend
Install dependencies

bash
npm install
Configure environment variables
Create .env file in backend directory:

env
PORT=8080
MONGODB_URI=mongodb://localhost:27017/blog-management
JWT_SECRET=your-super-secret-jwt-key-change-this
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
Start the backend server

bash
npm run dev
Server will run on http://localhost:8080

Frontend Setup
Navigate to frontend directory

bash
cd ../frontend
Install dependencies

bash
npm install
Start the development server

bash
npm start
Application will open on http://localhost:3000
