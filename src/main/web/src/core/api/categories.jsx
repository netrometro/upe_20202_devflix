const { default: useToken } = require("core/hooks/useToken");
const { get, post, del, put } = require("./requests");

export function getCategories(response){
  get('/category', null, null, response);
}

export function getCategoryById(id, response){
  get('/category/' + encodeURIComponent(id), null, null, response);
}

export function addCategory({title, color, visibility}, response){
  post('/category', null, {title, color, visibility}, useToken(), response);
}

export function editCategory(id, {title, color, visibility}, response){
  put('/category/' + encodeURIComponent(id), null, {title, color, visibility}, useToken(), response);
}

export function delCategory(id, response){
  del('/category/' + encodeURIComponent(id), null, useToken(), response);
}