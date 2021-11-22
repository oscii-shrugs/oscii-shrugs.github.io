/*  JavaScript  */


/* Script Block Objective: 11/22/2021
   Upon reaching the index.html page, button will animate (slide from right side).  Button will give the user
   the option of entering the site by clicking.
   Button will include link to functional home page replete with menu navigation. */






letThereBeLight = () => {
  var enterSiteBtn = document.createElement("BUTTON");  // create a button element
  enterSiteBtn.innerHTML = "Knock, and the door will be opened to you.<br><br>ENTER"; // insert text
  document.body.appendChild(enterSiteBtn);
  enterSiteBtn.setAttribute("id", "enterSiteBtn");
  enterSiteBtn.setAttribute("onclick", "knock()");


}


window.onload = function() {
  letThereBeLight();
};


knock = () => {
  location.href = "functional-home-page.html";
}
