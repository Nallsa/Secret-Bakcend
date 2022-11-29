const mongoose = require('mongoose');

const clothesSchema = mongoose.Schema({
  name: String,
  price: Number,
  img: String,
  colors: {
    brown: {
      size: {
        xs: Number,
        s: Number,
        m: Number,
        l: Number,
        xl: Number,
      },
    },
  },
  categoriesId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categories',
  },
});

const Clothes = mongoose.model('Clothes', clothesSchema);

module.exports = Clothes;
