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
  