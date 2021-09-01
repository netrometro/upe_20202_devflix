const { default: useToken } = require("core/hooks/useToken");
const { get, put } = require("./requests");

export function getMetadataById(id, response){
  get('/metadata/' + encodeURIComponent(id), null, null, response);
}

export function editMetadata(id, {videoLink, title, description, videoYoutubeChannel, tags}, response){
  put('/metadata/' + encodeURIComponent(id), null, {videoLink, title, description, videoYoutubeChannel, tags}, useToken(), response);
}