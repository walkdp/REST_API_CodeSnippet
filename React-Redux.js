The folder that contain action creater: For crud operation and searching.
Similarly, the reducer: which updates the application state crosspnding to dispatch action.

What are the module or dependecy need for CRUD operations Using React and Redux.
-react-redux
-redux
-redux-thunk
-rect-router-dom
-axios
-bootstrap

folder structure:
src
-actions
--tutoral.js(create/retrive/update/delete action)
--types.js

-components
--AddTutorial
--TutorialList.js
--Tutorial.js


-reducer
--index.js
--tutorals.js

-services
--TutorialService.js: Has method for sending HTTP request to the Apis.

//To handle any request.

App.js
http-common.js



Lets build this app.

First install the bootstrap, react-router-dom, 

Initiliaing the axios.

//Inside http-common.js

import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});


Create data service inside 
services/TutorialService.js

import http from "../http-common";
const getAll = () => {
  return http.get("/tutorials");
};

const get = id => {
  return http.get(`/tutorials/${id}`);
};


const create = data => {
  return http.post("/tutorials", data);
};


const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};

const remove = id => {
  return http.delete(`/tutorials/${id}`);
};

const removeAll = () => {
  return http.delete(`/tutorials`);
};

const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default TutorialService;


Action Types.
Define string constarints that indicates the type of actions.

actions/type.js

export const CREATE_TUTORIAL = "CREATE_TUTORIAL";
export const RETRIEVE_TUTORIALS = "RETRIEVE_TUTORIALS";
export const UPDATE_TUTORIAL = "UPDATE_TUTORIAL";
export const DELETE_TUTORIAL = "DELETE_TUTORIAL";
export const DELETE_ALL_TUTORIALS = "DELETE_ALL_TUTORIALS";

Action Creator.

It is used to make asynchronous http request with trigger dispatch on the result.

-createTutorial()
--call the TutorialService.create()
--dispatch CREATE_TUTORIAL

retrieveTutorials()

calls the TutorialService.getAll()
dispatch RETRIEVE_TUTORIALS
– updateTutorial()

calls the TutorialService.update()
dispatch UPDATE_TUTORIAL
– deleteTutorial()

calls the TutorialService.remove()
dispatch DELETE_TUTORIAL
– deleteAllTutorials()

calls the TutorialService.removeAll()
dispatch DELETE_ALL_TUTORIALS
– findTutorialsByTitle()

calls the TutorialService.findByTitle()
dispatch RETRIEVE_TUTORIALS


Some action creator return a Promise for component using them.

actions/tutorials.js














