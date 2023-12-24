//Imports the express library
import express, {Request, Response} from 'express';
import albumsRouter from './albums/albums.routes';
import artistsRouter from './artists/artists.routes';
import logger from './middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';

//Call express funtion and set the port
const app = express();
const port = 3000;

//Get request and set the response
//app.get('/', (req: Request, res: Response) => {res.send('Hello World from TypeScript!');});
app.use('/', [albumsRouter, artistsRouter]);
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(cors());
app.use(helmet());

//Initiates listening on the port and shows message in the console
app.listen(port, () => {console.log('Example app listening at http://localhost:${port}')});

//import and configure the dotenv library
import dotenv from "dotenv";
dotenv.config();

if (process.env.NODE_ENV == 'development') {
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode')
}