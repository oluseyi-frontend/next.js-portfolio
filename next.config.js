module.exports = {
  env: {
    MONGO_DB_URI:
      "mongodb+srv://olukayode:root1234@cluster0.dc2ys.mongodb.net/note-app?retryWrites=true&w=majority",
  },
};

const withImages = require("next-images");
module.exports = withImages();