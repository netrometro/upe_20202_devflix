const { default: useToken } = require("core/hooks/useToken");
const { get, post, del, put } = require("./requests");

export function getVideos(response){
  get('/video', null, null, response);
}

export function getVideoByKeyword(keyword, response){
  get('/video/search?keyword=' + encodeURIComponent(keyword), null, null, response);
}

export function getYoutubeVideoByKeyword(keyword, response){
  get('/video/youtube/search?keyword=' + encodeURIComponent(keyword), null, null, response);
}

export function addVideo(id, {visibility, metadata}, response){
  post('/video/' + encodeURIComponent(id), null, {visibility, metadata}, useToken(), response);
}

export function editVideo(id, {visibility, metadata}, response){
  put('/video/' + encodeURIComponent(id), null, {visibility, metadata}, useToken(), response);
}

export function delVideo(id, response){
  del('/video/' + encodeURIComponent(id), null, useToken(), response);
}