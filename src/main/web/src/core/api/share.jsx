const { default: useToken } = require("core/hooks/useToken");
const { post } = require("./requests");

export function shareLink(id, {userEmail, userName, link}, response){
  post('/share/' + encodeURIComponent(id), null, {userEmail, userName, link}, useToken(), response);
}