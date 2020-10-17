import { URLmodel } from "../database/model/URLmodel";
import { Request, Response } from "express";
import shortId from 'shortid'
import "dotenv/config";

export class URLController {
    public async EncurtarURL(req: Request, res: Response): Promise<void>{
        const { urlOrigem } = req.body;

        //Ver se a URL já existe
        const url = await URLmodel.findOne({ urlOrigem });
        if(url){
            res.json(url);
            return;
        }

        //Criar o hash para encurtar a URL
        const hash = shortId.generate();
        //const urlEncurtada = `${config.API_URL}/${hash}`;
        const urlEncurtada = `${process.env.API_URL}/${hash}`;

        //Salvar a URL no banco de dados
        const salvarURL = URLmodel.create({ urlOrigem, hash, urlEncurtada });

        //Retornar a URL encurtada
        res.json(salvarURL);
    }

    public async RedirecionarURL(req: Request, res: Response): Promise<void>{
        //Pegar o hash da URL
        const { hash } = req.params;
        const url = await URLmodel.findOne({ hash: hash });

        if(url){
            //Redirecionar para a URL original
            res.redirect(url.urlOrigem);
            return;
        }

        res.status(400).json({ error: 'URL não encontrada.' });
    }

    public async RetornarURLS(req: Request, res: Response): Promise<void>{
        const urls = await URLmodel.find();
        if(urls){
            res.json(urls);
            return;
        }
        res.status(400).json({ error: "Não há urls cadastradas." });
    }
}