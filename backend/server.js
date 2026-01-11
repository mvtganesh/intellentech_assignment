// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';

// const app = express();
// const PORT = process.env.PORT || 8080;

// // CORS Configuration
// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
//   credentials: true
// }));

// // Body parsing
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Test route
// app.get('/', (req, res) => {
//   res.json({
//     message: 'Role-Based Blog Management System API',
//     version: '1.0.0',
//     status: 'running',
//     cors: 'enabled',
//     frontend_url: 'http://localhost:3000'
//   });
// });

// // Health check
// app.get('/health', (req, res) => {
//   res.json({
//     status: 'OK',
//     timestamp: new Date().toISOString(),
//     uptime: process.uptime()
//   });
// });

// // Login endpoint
// app.post('/api/auth/login', (req, res) => {
//   console.log('🔐 Login attempt:', req.body.email);
  
//   const users = {
//     'rahul.kumar@crm.com': {
//       id: '1',
//       name: 'Rahul Kumar',
//       email: 'rahul.kumar@crm.com',
//       role: 'super_admin',
//       permissions: ['view', 'create', 'update', 'delete']
//     },
//     'priya.sharma@crm.com': {
//       id: '2',
//       name: 'Priya Sharma',
//       email: 'priya.sharma@crm.com',
//       role: 'manager',
//       permissions: ['view', 'create', 'update']
//     },
//     'rohan.verma@crm.com': {
//       id: '3',
//       name: 'Rohan Verma',
//       email: 'rohan.verma@crm.com',
//       role: 'employee',
//       permissions: ['view', 'create']
//     },
//     'saiTeja@crm.com': {
//       id: '4',
//       name: 'Sai Teja',
//       email: 'saiTeja@crm.com',
//       role: 'viewer',
//       permissions: ['view']
//     }
//   };

//   const { email, password } = req.body;
//   const user = users[email];
  
//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: 'User not found'
//     });
//   }

//   // Password check (always 12345 for testing)
//   if (password !== '12345') {
//     return res.status(401).json({
//       success: false,
//       message: 'Invalid password'
//     });
//   }

//   const token = `jwt-token-${Date.now()}-${user.id}`;
  
//   res.json({
//     success: true,
//     message: 'Login successful',
//     user: user,
//     tokens: {
//       accessToken: token,
//       refreshToken: `refresh-${token}`
//     }
//   });
// });

// // Register endpoint
// app.post('/api/auth/register', (req, res) => {
//   const { name, email, password } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).json({
//       success: false,
//       message: 'All fields are required'
//     });
//   }

//   const newUser = {
//     id: Date.now().toString(),
//     name,
//     email,
//     role: 'viewer',
//     permissions: ['view'],
//     createdAt: new Date().toISOString()
//   };

//   res.status(201).json({
//     success: true,
//     message: 'User registered successfully',
//     user: newUser,
//     token: `jwt-token-${Date.now()}-${newUser.id}`
//   });
// });

// // Middleware to check authentication
// const authenticate = (req, res, next) => {
//   const authHeader = req.headers.authorization;
  
//   if (!authHeader) {
//     return res.status(401).json({
//       success: false,
//       message: 'Access denied. No token provided.'
//     });
//   }
  
//   // For now, accept any token that starts with 'Bearer jwt-token-'
//   const token = authHeader.replace('Bearer ', '');
//   if (!token.startsWith('jwt-token-')) {
//     return res.status(401).json({
//       success: false,
//       message: 'Invalid token'
//     });
//   }
  
//   next();
// };

// // Admin dashboard
// app.get('/api/admin/dashboard', authenticate, (req, res) => {
//   res.json({
//     success: true,
//     stats: {
//       totalUsers: 42,
//       totalPosts: 156,
//       activeUsers: 38,
//       inactiveUsers: 4,
//       publishedPosts: 120,
//       draftPosts: 36
//     },
//     recentActivities: [
//       {
//         id: 1,
//         user: 'Rahul Kumar',
//         action: 'Created new post',
//         time: '2 hours ago'
//       },
//       {
//         id: 2,
//         user: 'Priya Sharma',
//         action: 'Updated profile',
//         time: '4 hours ago'
//       },
//       {
//         id: 3,
//         user: 'Rohan Verma',
//         action: 'Commented on post',
//         time: '6 hours ago'
//       }
//     ],
//     externalData: [
//       {
//         id: '1',
//         name: 'Sample Object 1',
//         data: {
//           color: 'Red',
//           capacity: '32GB'
//         }
//       },
//       {
//         id: '2',
//         name: 'Sample Object 2',
//         data: {
//           color: 'Blue',
//           capacity: '64GB'
//         }
//       }
//     ]
//   });
// });

// // Posts endpoints
// app.get('/api/posts', authenticate, (req, res) => {
//   const posts = [
//     {
//       id: '1',
//       title: 'Welcome to Our Blog System',
//       content: 'This is the first post in our new blog management system.',
//       author: 'Rahul Kumar',
//       authorId: '1',
//       status: 'published',
//       createdAt: '2024-01-10T10:00:00Z',
//       updatedAt: '2024-01-10T10:00:00Z',
//       tags: ['welcome', 'introduction']
//     },
//     {
//       id: '2',
//       title: 'Getting Started with Node.js',
//       content: 'Learn the basics of Node.js development in this comprehensive guide.',
//       author: 'Priya Sharma',
//       authorId: '2',
//       status: 'published',
//       createdAt: '2024-01-09T14:30:00Z',
//       updatedAt: '2024-01-09T14:30:00Z',
//       tags: ['nodejs', 'tutorial', 'backend']
//     },
//     {
//       id: '3',
//       title: 'React Best Practices',
//       content: 'Discover the best practices for building React applications in 2024.',
//       author: 'Rohan Verma',
//       authorId: '3',
//       status: 'draft',
//       createdAt: '2024-01-08T09:15:00Z',
//       updatedAt: '2024-01-08T09:15:00Z',
//       tags: ['react', 'frontend', 'best-practices']
//     }
//   ];
  
//   res.json({
//     success: true,
//     posts: posts,
//     count: posts.length
//   });
// });

// app.post('/api/posts', authenticate, (req, res) => {
//   const { title, content, tags } = req.body;
  
//   if (!title || !content) {
//     return res.status(400).json({
//       success: false,
//       message: 'Title and content are required'
//     });
//   }
  
//   const newPost = {
//     id: Date.now().toString(),
//     title,
//     content,
//     author: 'Current User',
//     authorId: '1',
//     status: 'draft',
//     createdAt: new Date().toISOString(),
//     updatedAt: new Date().toISOString(),
//     tags: tags || []
//   };
  
//   res.status(201).json({
//     success: true,
//     message: 'Post created successfully',
//     post: newPost
//   });
// });

// // Users endpoint
// app.get('/api/users', authenticate, (req, res) => {
//   const users = [
//     {
//       id: '1',
//       name: 'Rahul Kumar',
//       email: 'rahul.kumar@crm.com',
//       role: 'super_admin',
//       status: 'active',
//       department: 'IT',
//       createdAt: '2024-01-01T00:00:00Z'
//     },
//     {
//       id: '2',
//       name: 'Priya Sharma',
//       email: 'priya.sharma@crm.com',
//       role: 'manager',
//       status: 'active',
//       department: 'Marketing',
//       createdAt: '2024-01-02T00:00:00Z'
//     },
//     {
//       id: '3',
//       name: 'Rohan Verma',
//       email: 'rohan.verma@crm.com',
//       role: 'employee',
//       status: 'active',
//       department: 'Sales',
//       createdAt: '2024-01-03T00:00:00Z'
//     },
//     {
//       id: '4',
//       name: 'Sai Teja',
//       email: 'saiTeja@crm.com',
//       role: 'viewer',
//       status: 'active',
//       department: null,
//       createdAt: '2024-01-04T00:00:00Z'
//     }
//   ];
  
//   res.json({
//     success: true,
//     users: users,
//     count: users.length
//   });
// });

// // Handle preflight requests
// app.options('*', (req, res) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.status(200).send();
// });

// // 404 handler - FIXED: Don't use '*' as string
// app.use((req, res, next) => {
//   res.status(404).json({
//     success: false,
//     message: 'Route not found',
//     path: req.originalUrl,
//     method: req.method
//   });
// });

// // Error handler
// app.use((err, req, res, next) => {
//   console.error('Server error:', err);
//   res.status(500).json({
//     success: false,
//     message: 'Internal server error'
//   });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log('='.repeat(50));
//   console.log('🚀 Server Started Successfully!');
//   console.log('='.repeat(50));
//   console.log(`📍 Port: ${PORT}`);
//   console.log(`🌐 URL: http://localhost:${PORT}`);
//   console.log(`🔗 Health Check: http://localhost:${PORT}/health`);
//   console.log('='.repeat(50));
//   console.log('📡 Available Endpoints:');
//   console.log(`   POST  /api/auth/login`);
//   console.log(`   POST  /api/auth/register`);
//   console.log(`   GET   /api/admin/dashboard`);
//   console.log(`   GET   /api/posts`);
//   console.log(`   POST  /api/posts`);
//   console.log(`   GET   /api/users`);
//   console.log('='.repeat(50));
//   console.log('🌍 CORS Enabled for: http://localhost:3000');
//   console.log('='.repeat(50));
// });



import express from 'express';
const app = express();
const PORT = 8080;

// Allow ALL CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use(express.json());

// Test
app.get('/', (req, res) => {
  res.json({ message: 'Server is working!' });
});

// Login - ALWAYS SUCCESS
app.post('/api/auth/login', (req, res) => {
  console.log('Login attempt:', req.body);
  
  const email = req.body.email || 'test@email.com';
  
  // Create user based on email
  const users = {
    'rahul.kumar@crm.com': { role: 'super_admin', name: 'Rahul Kumar' },
    'priya.sharma@crm.com': { role: 'manager', name: 'Priya Sharma' },
    'rohan.verma@crm.com': { role: 'employee', name: 'Rohan Verma' },
    'saiTeja@crm.com': { role: 'viewer', name: 'Sai Teja' },
    'test@email.com': { role: 'viewer', name: 'Test User' }
  };
  
  // Find user or use default
  let userData = users[email] || { role: 'viewer', name: email.split('@')[0] };
  
  const user = {
    id: '1',
    name: userData.name,
    email: email,
    role: userData.role,
    permissions: ['view', 'create']
  };
  
  console.log('Login success:', user);
  
  res.json({
    success: true,
    message: 'Login successful!',
    user: user,
    tokens: {
      accessToken: 'token-' + Date.now(),
      refreshToken: 'refresh-' + Date.now()
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log('✅ Server running on http://localhost:' + PORT);
  console.log('✅ Login accepts:');
  console.log('   • rahul.kumar@crm.com (Super Admin)');
  console.log('   • priya.sharma@crm.com (Manager)');
  console.log('   • rohan.verma@crm.com (Employee)');
  console.log('   • saiTeja@crm.com (Viewer)');
  console.log('   • ANY email (Viewer)');
  console.log('✅ Password: ANY password works');
});