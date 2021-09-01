const { default: useToken } = require("core/hooks/useToken");
const { get, post, del, put } = require("./requests");

export function getUsers(response){
  get('/user', null, null, response);
}

export function getUserById(id, response){
  get('/user/' + encodeURIComponent(id), null, useToken(), response);
}

export function editUser(id, {name, email, password}, response){
  put('/user/' + encodeURIComponent(id), null, {name, email, password}, useToken(), response);
}

export function delUser(id, response){
  del('/user/' + encodeURIComponent(id), null, useToken(), response);
}