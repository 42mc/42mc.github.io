// let mainFlexHeight = document.querySelector(".scroll-section").offsetTop;
// document.documentElement.style.setProperty('--offset-height', mainFlexHeight + "px");
// console.log("mainFlexHeight: " + mainFlexHeight + "px");
// document.documentElement.style.setProperty('--main-height', document.querySelector(".content").offsetHeight + "px");
// size of main-flex

const ip = "cameras-chemical.joinmc.link";

var url = `https://api.minetools.eu/ping/${ip}/25565`;
 
$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('Server Offline');
   return false;
 } 
var pl = '';
 if(r.players.sample.length > 0 ){ pl = '<br>OP: '+r.players.sample[0].name;  } 
  $('#rest').html(r.description.replace(/§(.+?)/gi, '')+'<br><b>Players Online:</b> '+r.players.online+pl);
//  $('#favicon').attr('src', r.favicon);
    
});



// on page load
window.addEventListener("load", function() {
    let mainFlexHeight = document.querySelector(".main-flex").offsetHeight;
    document.documentElement.style.setProperty('--main-flex-height', mainFlexHeight + "px");
    console.log("mainFlexHeight: " + mainFlexHeight + "px");
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
  