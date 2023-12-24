## Activity 0
## Images
![Node -v and npm -v in terminal](-v.jpg 'Node -v and npm -v in terminal')
![Hello world console application](terminal.jpg 'Hello world console application')
![Hello world in the browser](helloWorld.jpg 'Hello world in the browser')
![Hello world with nodemon](node2.jpg 'Hello world with nodemon')
![Typescript in browser](ts.jpg 'Typescript in browser')


## Music API app.ts
***
//Imports the express library
import express, {Request, Response} from 'express';

//Call express funtion and set the port
const app = express();
const port = 3000;

//Get request and set the response
app.get('/', (req: Request, res: Response) => {res.send('Hello World from TypeScript!')});

//Initiates listening on the port and shows message in the console
app.listen(port, () => {console.log('Example app listening at http://localhost:${port}')});
***
