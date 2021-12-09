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
const user: User=new UserAccount("Durga",1)

We can associate the parameters to the function and return the value to the function.

function getAdminUser():User{

}

function deleteUser(user:User){

}

#Defining datetypes in TypeScript.
fileName: tutorial.type.ts

export default interface ITutorialData {
 id?: any | null,
 title: string,
 description: string,
 published?: boolean
}

we make the new folder called http-common.ts

Initializing axios for React TypeScript Project.

import axios from "axios"

export default axios.create
(
 {
  baseURL : "http://localhost:8080/api",
  header: {
   "Content-type":"application/json"
  }
 }
)

Create Data Service:
tutoral.service.ts

import http from "../http-common";
import ITutorialData from "../types/tutorial.type"

class TotoralDataService{
 //Function required to deal with the problem.
  getAll(){
   return http.get<Array<ITutorialData>>("/tutorials");
  }
  get(id: string){
   return http.get<ITutorialData>(`/tutorals/${id}`);
  }
  create(data: ITutorailData){
   return http.post<ITutorialData>('/tutoral',data);
  }
  update(data: ITutorialData,id: any){
   return http.put<any>(`/tutoral/${id}`,data)'
  }
  delete(id:any){
   return http.delete<any>`/tutoral/${id}`)
  }
  deleteAll() {
    return http.delete<any>(`/tutorials`);
  }
  findByTitle(title: string) {
    return http.get<Array<ITutorialData>>(`/tutorials?title=${title}`);
  }
}
export default new TutorialDataService();



//Add value by user using form into the add-tutorial.component.tsx

import { Component, ChangeEvent } from "react";
import TutorialDataService from "../services/tutorial.service";
import ITutorialData from '../types/tutorial.type';

type Props={}

type State= ITutorialData & {
 submitted: boolean
};

export defalut class AddTutoral extends Componet<Props,State>{
 constructor(props:Props){
  super(props)
  this.onChangeTitle= this.onChangeTitle.bind(this);
  this.onChangeDescription=this.onChangeDescription.bind(this)
  this.saveTutorail = this.saveTutoral.bind(this);
  this.newTutoral = this.newTutoral.bind(this);
 }
  this.state={
   id:null,
   title: '',
   description: '',
   published: false,
   submited: false,
  }
}

onChangeTitle(e:ChangeEvent<HTMLInputElement>){
 this.setState({
  title: e.target.value
 })
 onChangeDescription(e:ChangeEvent<HTMLInputElement>){
  this.setState({
   description: e.target.value
  })
 }
 saveTutorial(){
  const data: ITutorialData={
   title: this.state.title,
   description: this.state.description
  }
 };
 
 TutorailDataService.create(data)
  .then((response:any)=>{
   this.setState({
    id:response.data.id,
    title:response.data.title,
    description: response.data.description,
    publish:response.data.publish,
    submited:true,
   });
   console.log(data)
 })
 .catch((e: Error) => {
        console.log(e);
      });
      
   newTutoral(){
    this.setState({
     id: null,
     title: "",
     description: "",
     publish:false,
     submited: false
    })
   }
   render(){
     //Forms to add new tutoral.
     const {submited,title,description} =this.props
     
     return(
       <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>
            
             <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
            
     )
   }
}




























