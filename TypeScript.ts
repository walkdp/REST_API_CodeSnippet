The way you asign the varable in TypeScript is: set varable name and its types.

let varableName: string,
In javaScript we do let variableName; There is no need to define its types.

Defining the object: 
const user={
name:'Durga',
id: 9,
};

Describe the object shape using an inteface declaration.
 interface User {
  name: string,
  id: number,
}

To conform the shape of your interface by using syntax like : TypeName after variable declaration.

const user: User{
  name: 'Durga',
  id: 0,
}

JavaScript support object-oriented progarmming language so does TypeScript.

Define interface, class and constructor to TypeScript,

interface User {
  name:string,
  id:number
}

Class UserAccount{
  name:string,
  id: number,

  constructor(name:string,id:number){
    this.name=name,
  ` this.id=id,
  }
}
cosst user: User=new UserAccount("Durga",1)




























