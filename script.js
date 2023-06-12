// let mainFlexHeight = document.querySelector(".scroll-section").offsetTop;
// document.documentElement.style.setProperty('--offset-height', mainFlexHeight + "px");
// console.log("mainFlexHeight: " + mainFlexHeight + "px");
// document.documentElement.style.setProperty('--main-height', document.querySelector(".content").offsetHeight + "px");
// size of main-flex

const ip = "cameras-chemical.joinmc.link";

var url = `https://eu.mc-api.net/v3/server/ping/${ip}`


fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  console.log(data);
  var rest = document.getElementById("rest");
  // Your code for handling the data you get from the API
  if (data.players.sample != undefined) {
    if (data.players.sample.length > 0 ) {
      var pl = "<br><ul>";
      for (let i = 0; i < data.players.sample.length; i++) {
        pl += "<li>" + data.players.sample[i].name + "</li>";
      }
      pl += "</ul>";
    } else {
      var pl = "";
    }
    if (data.online) {
        rest.innerHTML = '<br><b>Players Online:</b> ' + data.players.online + pl;
        // console.log('<br><b>Players Online:</b> ' + data.players.online + pl);
    } else {
        rest.innerHTML = "Server Offline";
    }
  } else {
    if (data.online) {
      rest.innerHTML = 'Server Online, no players. Be the first!';
    } else {
      rest.innerHTML = "Server Offline";
    }
  }
})
.catch(function(error) {
    // Your code for handling errors
    var rest = document.getElementById("rest");
    rest.innerHTML = "Server Offline";
    console.warn(error);
});


// on page load
window.addEventListener("load", function() {
    let mainFlexHeight = document.querySelector(".main-flex").offsetHeight;
    document.documentElement.style.setProperty('--main-flex-height', mainFlexHeight + "px");
    // console.log("mainFlexHeight: " + mainFlexHeight + "px");
});


// Listener for copy-ip-btn click
document.querySelector(".copy-ip-btn").addEventListener("click", function() {
    // Get the text field
    let copyText = document.querySelector(".ip");

    fallbackCopyTextToClipboard(copyText.innerHTML);
});

// Listener for copy-rules-btn click
document.querySelector(".copy-rules-btn").addEventListener("click", function() {
    // Get the text field
    let copyText = document.querySelector(".rules");

    fallbackCopyTextToClipboard(copyText.innerHTML);
});

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);

    window.alert("Copied to clipboard!📋\n\nPress Enter to continue.");
  }


  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }
  