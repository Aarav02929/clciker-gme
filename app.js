let clickCount = 0;
let upgrade4Active = false;
let boughtC1 = 0;
let boughtC2 = 0;
let boughtC3 = 0;
let boughtC4 = 0;
let boughtA1 = 0;
let boughtA2 = 0;
let boughtA3 = 0;
let boughtA4 = 0;
function clicked() {
  clickCount++;
  document.querySelector("#click-count").innerHTML = clickCount;
  saveScore();
}
function reset() {
  clickCount = 0;
  window.location.href = `gamepage.html`;
  document.querySelector("#click-count").innerHTML = clickCount;
  document.querySelector("#clicker").innerHTML = "CLICK ME";
  document.querySelector("#clicker").onclick = function () {
    clicked();
  };
  document.querySelector("#upgrade1").innerHTML = "Upgrade 1";
  document.querySelector("#upgrade2").innerHTML = "Upgrade 2";
  document.querySelector("#upgrade3").innerHTML = "Upgrade 3";
  document.querySelector("#upgrade4").innerHTML = "Upgrade 4";
  upgrade4Active = false;
  saveScore();
}

function upgradeC1() {
  if (upgrade4Active) {
    alert("Upgrade 1 is already active!");
  } else if (clickCount >= 20) {
    clickCount -= 20;
    document.querySelector("#click-count").innerHTML = clickCount;
    document.querySelector("#clicker").innerHTML = "CLICK ME +2";
    document.querySelector("#clicker").onclick = function () {
      clicked();
      clicked();
      boughtC1++;
    };
  } else if (boughtC1 >= 1) {
    alert("You already bought this upgrade");
  } else {
    alert("You don't have enough clicks to buy this upgrade");
  }
}
function upgradeC2() {
  if (upgrade4Active) {
    alert("Upgrade 2 is already active!");
  } else if (clickCount >= 50) {
    clickCount -= 50;
    document.querySelector("#click-count").innerHTML = clickCount;
    document.querySelector("#clicker").innerHTML = "CLICK ME +3";
    document.querySelector("#clicker").onclick = function () {
      clicked();
      clicked();
      clicked();
      boughtC2++;
    };
  } else if (boughtC2 >= 1) {
    alert("You already bought this upgrade");
  } else {
    alert("You don't have enough clicks to buy this upgrade");
  }
}
function upgradeC3() {
  if (upgrade4Active) {
    alert("Upgrade 3 is already active!");
  } else if (clickCount >= 100) {
    clickCount -= 100;
    document.querySelector("#click-count").innerHTML = clickCount;
    document.querySelector("#clicker").innerHTML = "CLICK ME +4";
    document.querySelector("#clicker").onclick = function () {
      clicked();
      clicked();
      clicked();
      clicked();
      boughtC3++;
    };
  } else if (boughtC3 >= 1) {
    alert("You already bought this upgrade");
  } else {
    alert("You don't have enough clicks to buy this upgrade");
  }
}
function upgradeC4() {
  if (clickCount >= 200) {
    clickCount -= 200;
    document.querySelector("#click-count").innerHTML = clickCount;
    document.querySelector("#clicker").innerHTML = "CLICK ME +5";
    document.querySelector("#clicker").onclick = function () {
      clicked();
      clicked();
      clicked();
      clicked();
      clicked();
      boughtC4++;
    };
  } else if (boughtC4 >= 1) {
    alert("You already bought this upgrade");
  } else {
    alert("You don't have enough clicks to buy this upgrade");
  }
}
function upgradeA1() {
  if (clickCount >= 100) {
    clickCount -= 100;
    setInterval(function () {
      clickCount++;
      document.querySelector("#click-count").innerHTML = clickCount;
    }, 1000);
    boughtA1++;
  } else if (boughtA1 >= 1) {
    alert("You already bought this upgrade");
  } else {
    alert("You don't have enough clicks to buy this upgrade");
  }
}
function upgradeA2() {
  if (clickCount >= 200) {
    clickCount -= 200;
    setInterval(function () {
      clickCount++;
      document.querySelector("#click-count").innerHTML = clickCount;
    }, 500);
    boughtA2++;
  } else if (boughtA2 >= 1) {
    alert("You already bought this upgrade");
  } else {
    alert("You don't have enough clicks to buy this upgrade");
  }
}
function upgradeA3() {
  if (clickCount >= 500) {
    clickCount -= 500;
    setInterval(function () {
      clickCount++;
      document.querySelector("#click-count").innerHTML = clickCount;
    }, 250);
    boughtA3++;
  } else if (boughtA3 >= 1) {
    alert("You already bought this upgrade");
  } else {
    alert("You don't have enough clicks to buy this upgrade");
  }
}
function upgradeA4() {
  if (clickCount >= 1000) {
    clickCount -= 1000;
    setInterval(function () {
      clickCount++;
      document.querySelector("#click-count").innerHTML = clickCount;
    }, 125);
    boughtA4++;
  } else if (boughtA4 >= 1) {
    alert("You already bought this upgrade");
  } else {
    alert("You don't have enough clicks to buy this upgrade");
  }
}
function saveScore() {
  document.cookie = `score=${clickCount}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split("=");
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}
