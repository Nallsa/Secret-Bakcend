const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use(require('./routes/categories.route'));
app.use(require('./routes/clothes.route'));
app.use(require('./routes/users.route'));
app.use(require('./routes/coupons.route'));
app.use(require('./routes/orders.route'));
app.use(require('./routes/contacts.route'));

mongoose
  .connect(
    'mongodb+srv://insom:ismait3310@cluster0.ybsxb7s.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    app.listen(3000, () => {
      console.log(`http://localhost:${3000}`);
    });

    console.log('Успешно соединились с сервером MongoDB');
  })
  .catch(e => {
    console.log(e.toString());
    console.log('Ошибка при соединении с сервером MongoDB');
  });
