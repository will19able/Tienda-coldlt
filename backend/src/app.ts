import express, { Application } from 'express'
import morgan from 'morgan'
import cors from "cors";

// Routes
import IndexRoutes from "./routes/index.routes";

export class App {
    app: Application;

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors());
    }

    private routes() {
            
        this.app.use(IndexRoutes);
        /* this.app.use('/posts', PostRoutes); */
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}