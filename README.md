# Setup

Make sure to install the dependencies:

```bash
pnpm install
```

and to provide .env variables

```bash
//.env

MODEL_PATH = '<this should point to the absolute bath for your model file>'
```

## Development Server

Start the development server on <http://localhost:3000>

```bash
pnpm run dev
```

## current API endpoints

to load the model into memory:

```
http://localhost:3000/init
```

to use the model:

```
http://localhost:3000/api/chat?q=<your question goes here>
```

additionally you can listen on a websocket endpoint, which will stream the generated tokens.

```
ws://localhost:8080
```
