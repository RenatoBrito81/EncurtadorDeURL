import { URLController } from './controller/URLController';
import express, {Request, Response} from 'express';

const api = express();
api.use(express.json());

const urlController = new URLController();

api.post('/encurtarURL', urlController.EncurtarURL);

api.get('/:hash', urlController.RedirecionarURL);

api.get('/test', (req: Request, res: Response) => {
    res.json({ success: true });
});

api.listen(5000, () => console.log("Servidor Express está rodando..."));