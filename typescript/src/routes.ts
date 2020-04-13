// Import the types from the express lib to link to the fields request & response
import { Request, Response } from 'express';
// Import the create user service
import createUser from './services/CreateUser';
// The request / response field to Request / Response types on express lib
export function helloWorld(request: Request, response: Response) {
  // Create a user using the types configured on CreateUser file
  const user = createUser({
    name:'Ricardo',
    email: 'ricardo@gmail.com', 
    password: '13216',
    techs: [
        'Node.js',
        'ReactJS',
        { title: 'Javascript', experience: 100 },
      ],
  });
  // Gets easier to user the fields using Intelisense
  return response.json({ message: `Hello ${user.name}` });
}