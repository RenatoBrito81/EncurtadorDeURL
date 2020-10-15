import express, {Request, Response} from 'express';

const api = express();

api.get('/test', (req: Request, res: Response) => {
    res.json({ success: true });
});

api.listen(5000, () => console.log("Servidor Express está rodando..."));