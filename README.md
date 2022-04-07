# This is a MERN Stack application built using typescript for both frontend and backend.

In order to start the project locally you need run an `npm i` in the root of the project and an `npm i` in the client folder, where the frontend application is located.

You will also need to add a .env file in the root of the project containing the following variables:
PORT - the port where you want to run the app locally
CONNECTION - the connection string for connecting to mongodb 
TOKEN_SECRET - a value for encoding JWT


The last thing to do is to modify the baseURL in the `client/src/services/http.ts` so that the frontend app will call the server on the right port.

On the frontend side, the app is built with React + Typescript, using the context API for a high level state management. For styling I used the 'react-bootstrap' library for easing the job of making the app responsive and
 'styled components' for bulding the custom components (checkbox, tooltip, switch button) which you can find in `src/components`.

On the backend side  I used Node.js + Express and MongoDb for building a REST API. The calls from frontend to backend are made using Axios. 
For validating the body of the requests I used express validator and the errors are also handled on the FE side.
