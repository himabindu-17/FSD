const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'User Registration',
        error: null,
        user: null
    });
});

app.post('/register', (req, res) => {
    const { username, age } = req.body;

    if (!username || username.length < 3) {
        res.render('index', {
            title: 'Registration Failed',
            error: 'Username must have 3 characters.',
            user: null
        });
    }
    else if (!age || age < 18) {
        res.render('index', {
            title: 'Registration Failed',
            error: 'Age must be 18 or above.',
            user: null
        });
    }
    else {
        res.render('index', {
            title: 'Registration Successful',
            error: null,
            user: username
        });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});