chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var element = document.getElementById("advocate-modal");
    element.remove();
    document.body.classList.remove("advocate-modal-visible");
});
