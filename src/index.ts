import app from './app';
require('dotenv').config();
const PORT = process.env.PORT || 3004;
require('../env/validateEnv');

app.listen(PORT, () => {
  console.log('server is running on port', PORT);
});
