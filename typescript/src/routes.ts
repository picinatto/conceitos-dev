import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name:'Ricardo',
    email: 'ricardo@gmail.com', 
    password: '13216'
  });

  return response.json({ message: `Hello ${user.name}` });
}