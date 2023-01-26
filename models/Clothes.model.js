const mongoose = require('mongoose');

const clothesSchema = mongoose.Schema({
  name: String,
  price: Number,
  discount: Number,
  modelImg: String,
  img: [String],
  colors: [
    {
      color: String,
      modelImgItem: String,
      imgItem: [String],
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
