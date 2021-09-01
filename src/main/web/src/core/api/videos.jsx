const { default: useToken } = require("core/hooks/useToken");
const { get, post, del, put } = require("./requests");

function getVideos(response){
  get('/video', null, null, response);
}

function getVideoByKeyword(keyword, response){
  get('/video/search?keyword=' + encodeURIComponent(keyword), null, null, response);
}

function getYoutubeVideoByKeyword(keyword, response){
  get('/video/youtube/search?keyword=' + encodeURIComponent(keyword), null, null, response);
}

function addVideo(id, {visibility, metadata}, response){
  post('/video/' + encodeURIComponent(id), null, {visibility, metadata}, useToken(), response);
}

function editVideo(id, {visibility, metadata}, response){
  put('/video/' + encodeURIComponent(id), null, {visibility, metadata}, useToken(), response);
}

function delVideo(id, response){
  del('/video/' + encodeURIComponent(id), null, useToken(), response);
}