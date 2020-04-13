// Create the interface in order to facilitate the creation of an 
// object that will hold the data and show the items in Intelisense
interface CreateUserData {
  name?: string; // The ? marks that the field is optional
  email: string;
  password: string;
}

export default function createUser(
  {name, email, password} // List all the fields
  :CreateUserData ) { // Link to the interface to get the types and rules
  const user = {
    name, 
    email,
    password,
  }
  // Return the data
  return user;
}