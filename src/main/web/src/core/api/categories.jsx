const { default: useToken } = require("core/hooks/useToken");
const { get, post, del, put } = require("./requests");

function getCategories(response){
  get('/category', null, null, response);
}

function getCategoryById(id, response){
  get('/category/' + encodeURIComponent(id), null, null, response);
}

function addCategory({title, color, visibility}, response){
  post('/category', null, {title, color, visibility}, useToken(), response);
}

function editCategory(id, {title, color, visibility}, response){
  put('/category/' + encodeURIComponent(id), null, {title, color, visibility}, useToken(), response);
}

function delCategory(id, response){
  del('/category/' + encodeURIComponent(id), null, useToken(), response);
}