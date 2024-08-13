import os

def create_project_structure(base_dir="NewProject"):
    # Define the directory structure
    directories = [
        "public/css",
        "public/js",
        "public/images",
        "views/partials",
        "routes",
        "models",
        "controllers",
        "config",
    ]
    
    # Define the files to be created
    files = {
        "app.js": """const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes/index');
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set view engine to EJS
app.set('view engine', 'ejs');

// Routes
app.use('/', routes);

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/newproject', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
""",
        "public/css/style.css": "/* Add your CSS styles here */",
        "public/js/main.js": "// Add your JavaScript code here",
        "views/index.ejs": "<!-- Add your EJS code here -->",
        "views/partials/header.ejs": "<!-- Add your header partial here -->",
        "views/partials/footer.ejs": "<!-- Add your footer partial here -->",
        "routes/index.js": """const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;
""",
        "models/User.js": "// Add your Mongoose schema here",
        "controllers/userController.js": "// Add your controller logic here",
        "config/db.js": """const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/newproject', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
""",
        ".gitignore": "node_modules/\n.env",
        "package.json": """{
  "name": "newproject",
  "version": "1.0.0",
  "description": "A Node.js web application",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^5.11.18",
    "ejs": "^3.1.5"
  }
}""",
        "README.md": "# NewProject\nThis is a web development project using Node.js, MongoDB, EJS, and CSS.",
    }

    # Create directories
    for directory in directories:
        os.makedirs(os.path.join(base_dir, directory), exist_ok=True)
    
    # Create files with initial content
    for file_path, content in files.items():
        with open(os.path.join(base_dir, file_path), "w") as file:
            file.write(content)
    
    print(f"Project structure created successfully in '{base_dir}'")

# Run the function to create the project structure
create_project_structure()
