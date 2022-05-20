import express, {Express} from 'express';
import Helmet from 'helmet';
import cors from 'cors';
const app: Express = express();

app.use(cors());
app.use(Helmet());

export default app;
