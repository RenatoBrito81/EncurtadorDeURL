import "dotenv/config";
import mongoose from 'mongoose';

export class MongoConnection {
    public async conectarMongo(): Promise<void>{
        try{
            const conexao_mongo = process.env.CONEXAO_MONGODB || "INFORME SUA STRING DE CONEXÃO COM O MONGO AQUI";
            await mongoose.connect(conexao_mongo, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log("Conexão com Mongo realizada com sucesso.");
        }
        catch(err){
            console.error(err.message);
            process.exit(1);
        }
    }
}