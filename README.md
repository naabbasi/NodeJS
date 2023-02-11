## Getting started with nodejs, expressjs, typeorm, reactjs with primereact and typescript

    - mkdir backend && cd backend
    - npm init
    - npm install express dotenv
    - npm i -D typescript @types/express @types/node
    - npm install -D concurrently nodemon
    - Generating tsconfig.json
        - npx tsc --init
        - Uncomment "outDir": "./" from tsconfig.json and make "outDir": "./dist"
        - change "main": "index.js" to "main": "index.ts"
### Create index.ts in backend root directory with following content
<code>
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
</code>

#### Update "scripts" section in package.json  with the following:
<code>
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
</code>

#### Run dev server "npm run dev"
