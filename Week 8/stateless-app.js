const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

// i) Configure Template Engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Required to read/write cookies

// ii) Maintain Sessions
app.use(
  session({
    secret: 'my-secret-key', // Used to sign the session ID cookie
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 } // Session expires in 1 minute
  })
);

const authMiddleware = (req, res, next) => {
  if (req.session.isLoggedIn) {
    next(); // User is authenticated
  } else {
    res.redirect('/login'); // Redirect to login
  }
};

app.get('/login', (req, res) => {
  res.render('login', { error: null });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Basic hardcoded check (User: admin, Pass: 123)
  if (username === 'admin' && password === '123') {
    req.session.isLoggedIn = true;
    req.session.username = username;

    // i) Create a custom cookie
    res.cookie('lastVisit', new Date().toLocaleTimeString());

    res.redirect('/dashboard');
  } else {
    res.render('login', {
      error: 'Invalid credentials!'
    });
  }
});

app.get('/dashboard', authMiddleware, (req, res) => {
  // i) Read cookies and ii) Access session data

  const lastVisit =
    req.cookies.lastVisit || 'First time!';

  res.render('dashboard', {
    user: req.session.username,
    lastVisit: lastVisit
  });
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid'); // Clear the session cookie
    res.redirect('/login');
  });
});

app.listen(3000, () =>
  console.log('Server: http://localhost:3000/login')
);