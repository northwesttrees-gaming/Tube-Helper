// Check internet connection and replace image URLs

// Function to update paragraph titles and save input to local storage
function updateParagraph1() {
    var userInput1 = document.getElementById("titleField").value;
    localStorage.setItem("tubeHelperTitle", userInput1);
    for (var t1 = 0; t1 < 4; t1++) {
        document.getElementById("mytitle" + t1).innerText = userInput1;
    }
}
function updateParagraph2() {
    var userInput2 = document.getElementById("videoTimeField").value;
    localStorage.setItem("tubeHelperVideoTime", userInput2);
    for (var t2 = 0; t2 < 4; t2++) {
        document.getElementById("myvideotime" + t2).innerText = userInput2;
    }
}
function updateParagraph() {
    updateParagraph1();
    updateParagraph2();
}
// Function to retrieve saved input from local storage and update titles on page load
window.onload = function() {
    var tubeHelperTitle = localStorage.getItem("tubeHelperTitle");
    var tubeHelperVideoTime = localStorage.getItem("tubeHelperVideoTime");
    if (tubeHelperTitle) {
        document.getElementById("titleField").value = tubeHelperTitle;
        updateParagraph1(); // Update titles if input is retrieved from local storage
    }
    if (tubeHelperVideoTime) {
        document.getElementById("videoTimeField").value = tubeHelperVideoTime;
        updateParagraph2(); // Update titles if input is retrieved from local storage
    }
}
if (navigator.onLine) {
  var aNewId = "gzKb-JxjyWQ";
  var bNewId = "zv-TS_mEHE4";
  var cNewId = "RNCwBSPTZiM";
  var dNewId = "V2IhvWpcjVg";
  var eNewId = "j8y-_ts_H8s";
  for (var a = 0; a < 1; a++) {
      var aId = "a" + a;
      var aCurrentUrl = "https://img.youtube.com/vi/zv-TS_mEHE4/maxresdefault.jpg";
      var aNewUrl = aCurrentUrl.replace("zv-TS_mEHE4", aNewId);
      document.getElementById(aId).src = aNewUrl;
  }
  for (var b = 0; b < 2; b++) {
      var bId = "b" + b;
      var bCurrentUrl = "https://img.youtube.com/vi/zv-TS_mEHE4/maxresdefault.jpg";
      var bNewUrl = bCurrentUrl.replace("zv-TS_mEHE4", bNewId);
      document.getElementById(bId).src = bNewUrl;
  }
  for (var c = 0; c < 2; c++) {
      var cId = "c" + c;
      var cCurrentUrl = "https://img.youtube.com/vi/zv-TS_mEHE4/maxresdefault.jpg";
      var cNewUrl = cCurrentUrl.replace("zv-TS_mEHE4", cNewId);
      document.getElementById(cId).src = cNewUrl;
  }
  for (var d = 0; d < 1; d++) {
      var dId = "d" + d;
      var dCurrentUrl = "https://img.youtube.com/vi/zv-TS_mEHE4/maxresdefault.jpg";
      var dNewUrl = dCurrentUrl.replace("zv-TS_mEHE4", dNewId);
      document.getElementById(dId).src = dNewUrl;
  }
  for (var e = 0; e < 1; e++) {
      var eId = "e" + e;
      var eCurrentUrl = "https://img.youtube.com/vi/zv-TS_mEHE4/maxresdefault.jpg";
      var eNewUrl = eCurrentUrl.replace("zv-TS_mEHE4", eNewId);
      document.getElementById(eId).src = eNewUrl;
  }
} else {
  console.log("The browser is offline.");
  // Handle the absence of internet connection here
};