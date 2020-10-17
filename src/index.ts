import { URLController } from './controller/URLController';
import express, {Request, Response} from 'express';
import { MongoConnection } from './database/MongoConnection';

const api = express();
api.use(express.json());

const database = new MongoConnection();
database.conectarMongo();

const urlController = new URLController();
api.post('/encurtarURL', urlController.EncurtarURL);

api.get('/encurtarURL', urlController.RetornarURLS);

api.get('/:hash', urlController.RedirecionarURL);

api.listen(5000, () => console.log("Servidor Express está rodando..."));