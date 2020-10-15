import { Request, Response } from "express";
import shortId from 'shortid'
import { config } from "../config/Constants";

export class URLController {
    public async EncurtarURL(req: Request, res: Response): Promise<void>{
        //Ver se a URL já existe

        //Criar o hash para encurtar a URL
        const { URLorigem } = req.body;
        const hash = shortId.generate();
        const URLencurtada = `${config.API_URL}/${hash}`;

        //Salvar a URL no banco de dados

        //Retornar a URL encurtada
        res.json({ URLorigem, hash, URLencurtada });
    }

    public async RedirecionarURL(req: Request, res: Response): Promise<void>{
        //Pegar o hash da URL
        const { hash } = req.params;

        //Encontrar a URL original através do hash
        const dadosURL = {
            "URLorigem": "https://www.carrefour.com.br/notebook-samsung-intel-celeron-4gb-64gb-tela-13-3-windows-10-home-flash-f30-np530xbb-ad3br-coral-5648726/p",
            "hash": "sG1N2WDu_",
             "URLencurtada": "http://localhost:5000/sG1N2WDu_"
        }

        //Redirecionar para a URL original
        res.redirect(dadosURL.URLorigem);
    }
}