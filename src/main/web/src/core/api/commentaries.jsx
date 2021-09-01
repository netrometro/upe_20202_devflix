const { default: useToken } = require("core/hooks/useToken");
const { get, post, del, put } = require("./requests");

function getCommentariesCategory(id, response){
  get('/commentary/category/' + encodeURIComponent(id), null, null, response);
}

function getCommentariesVideo(id, response){
  get('/commentary/video/' + encodeURIComponent(id), null, null, response);
}

function addCommentaryCategory(id, text, response){
  post('/commentary/category/' + encodeURIComponent(id), null, text, useToken(), response);
}

function addCommentaryVideo(id, text, response){
  post('/commentary/video/' + encodeURIComponent(id), null, text, useToken(), response);
}

function editCommentary(id, text, response){
  put('/commentary/' + encodeURIComponent(id), null, text, useToken(), response);
}

function delCommentary(id, response){
  del('/commentary/' + encodeURIComponent(id), null, useToken(), response);
}