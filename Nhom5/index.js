require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

let nextId = 1;

app.use(express.json());

// Logger middleware: log every request in format [time] METHOD /path.
app.use((req, res, next) => {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.originalUrl}`);
  next();
});

function checkAge(req, res, next) {
  const ageRaw = req.query.age;
  const age = Number(ageRaw);

  if (!ageRaw || Number.isNaN(age) || age < 18) {
    return res.status(400).json({ message: 'Age must be provided and at least 18' });
  }

  req.age = age;
  next();
}

app.get('/api/info', checkAge, (req, res) => {
  const name = (req.query.name || '').trim();

  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }

  return res.json({
    name,
    age: req.age,
    message: `Welcome, ${name}!`
  });
});

app.post('/api/register', (req, res) => {
  const name = (req.body.name || '').trim();
  const ageRaw = req.body.age;
  const email = (req.body.email || '').trim();
  const age = Number(ageRaw);

  if (!name || !email || ageRaw === undefined || ageRaw === null || ageRaw === '') {
    return res.status(400).json({ message: 'name, age, email are required' });
  }

  if (Number.isNaN(age) || age < 0) {
    return res.status(400).json({ message: 'age must be a valid non-negative number' });
  }

  const user = {
    id: nextId++,
    name,
    age,
    email
  };

  return res.status(201).json({
    message: 'Register success',
    user
  });
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
