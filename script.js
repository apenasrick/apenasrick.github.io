// This code will copy the email address to the clipboard when the user clicks on the email icon.
function copyToClipboard(text) {
    const type = 'text/plain';
    const blob = new Blob([text], {type});
    const data = [new ClipboardItem({[type]: blob})];
    navigator.clipboard.write(data).then(function() {
      console.log('Copied to clipboard!');
    }, function() {
      console.log('Failed to copy to clipboard.');
    });
  }
  
  // This code will open the GitHub repository in a new tab when the user clicks on the GitHub icon.
  function openGitHub() {
    window.open('https://github.com/clashrick');
  }  