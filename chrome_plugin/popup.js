document.getElementById("myBtn").addEventListener('click', function () {
  var bkg = chrome.extension.getBackgroundPage();
  bkg.console.log("inside execution");

  bkg.chrome.notifications.create(
       {   
            type:"basic",
            title:"Article found",
            message:"article link",
            iconUrl:"images/freshworks-dew.png",
        }
    );

});