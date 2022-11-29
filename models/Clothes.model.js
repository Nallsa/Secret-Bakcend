const mongoose = require('mongoose');

const clothesSchema = mongoose.Schema({
  name: String,
  price: Number,
  img: String,
  colors: {
    brown: {
      size: {
        XS: Number,
        S: Number,
        M: Number,
        L: Number,
        XL: Number,
      },
    },
    black: {
      size: {
        XS: Number,
        S: Number,
        M: Number,
        L: Number,
        XL: Number,
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
