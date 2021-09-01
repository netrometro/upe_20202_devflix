const { default: useToken } = require("core/hooks/useToken");
const { get, post, del, put } = require("./requests");

export function getCommentariesCategory(id, response){
  get('/commentary/category/' + encodeURIComponent(id), null, null, response);
}

export function getCommentariesVideo(id, response){
  get('/commentary/video/' + encodeURIComponent(id), null, null, response);
}

export function addCommentaryCategory(id, text, response){
  post('/commentary/category/' + encodeURIComponent(id), null, text, useToken(), response);
}

export function addCommentaryVideo(id, text, response){
  post('/commentary/video/' + encodeURIComponent(id), null, text, useToken(), response);
}

export function editCommentary(id, text, response){
  put('/commentary/' + encodeURIComponent(id), null, text, useToken(), response);
}

export function delCommentary(id, response){
  del('/commentary/' + encodeURIComponent(id), null, useToken(), response);
}