# Add Comments to Implementation of the MERN-stack Architecture

## Root-level Functionality

* TODO: Explain what each script does in the root-level `package.json` file:
start - runs the server
develop - switches to the server side code and runs nodemon
        - switches to client side code and starts the vite react client
install - installs npm dependencies in the server & client side code
seed - switches to the server side code & seeds the database
build - switches to the client side code & creates the dist folder bundle

```json
"scripts": {
  "start": "node server/server.js",
  "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm run dev\"",
  "install": "cd server && npm i && cd ../client && npm i",
  "seed": "cd server && npm run seed",
  "build": "cd client && npm run build"
},
```

## Client-side Functionality

* TODO: Explain what this object does in the client-side `client/vite.config.js` file:

- creates a graphQL proxy for the localhost address to run the graphQL / apollo sandbox
- changeOrigin: true sets the origin of the graphQL to the 'target' address
  - this is important because the server & the client run on different ports
- secure: false eliminates certificate verification when sending rqeuests, generally used when testing / working in an HTTP environment, instead of HTTPS

```js
  proxy: {
    '/graphql': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      secure: false,
    },
  },
```

## Server-side Functionality

* TODO: Add a comment describing the functionality of this block of code in `server/server.js`:

- if the node environment is set to production mode, serve static files from the dist folder, & send the index.html file within to the client

```js
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}
```
