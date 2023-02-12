## Getting started with nodejs, expressjs, typeorm, reactjs with primereact and typescript

    - mkdir backend && cd backend
    - npm init
    - npm install express dotenv
    - npm i -D typescript @types/express @types/node
    - npm install -D concurrently nodemon tsc-alias rimraf
        - tsc-alias will be used to resolve paths:[] from tsconfig.json
    - npm install -g ts-node
    - Generating tsconfig.json
        - npx tsc --init
        - Uncomment "outDir": "./" from tsconfig.json and make "outDir": "./dist"
        - change "main": "index.js" to "main": "index.ts"
### Create index.ts in backend root directory with following content
<pre>
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
</pre>

#### Update "scripts" section in package.json  with the following:
<pre>
    "build": "npx tsc",
    "start": "node dist/index.js",
    "predev": "rimraf dist && npx tsc && tsc-alias",
    "dev": "concurrently \"npx tsc && tsc-alias --watch\" \"nodemon -q dist/index.js\"",
</pre>

#### Run dev server "npm run dev"
