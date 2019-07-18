// automatic scroll in the message list
function scroll() {
  var elem = document.getElementById('message-panel');
  elem.scrollTop = elem.scrollHeight;
}

$(document).ready(() => {
  window.setInterval(scroll, 5000);
});
