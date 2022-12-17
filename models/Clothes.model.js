const mongoose = require('mongoose');

const clothesSchema = mongoose.Schema({
  name: String,
  price: Number,
  modelImg: String,
  colors: [
    {
      color: String,
      img: String,
      sizesModel: [
        {
          size: String,
          rest: Number,
        },
      ],
    },
  ],
  categoriesId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categories',
  },
});

const Clothes = mongoose.model('Clothes', clothesSchema);

module.exports = Clothes;
