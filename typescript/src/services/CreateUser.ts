// Create the interface to use the TechObject in Techs
interface TechObject {
  title: string;
  experience: number;
}

// Create the interface in order to facilitate the creation of an 
// object that will hold the data and show the items in Intelisense
interface CreateUserData {
  name?: string; // The ? marks that the field is optional
  email: string;
  password: string;
  techs: Array<string | TechObject>; //If was only string could use string[];
}

export default function createUser(
  {name, email, password, techs} // List all the fields
  :CreateUserData ) { // Link to the interface to get the types and rules
  const user = {
    name, 
    email,
    password,
    techs
  }
  // Return the data
  return user;
}