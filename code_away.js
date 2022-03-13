function home() {
  window.location = "index.html";
}

function openNav() {
  document.getElementById("mySidebar").style.width = "300px";
  document.getElementById("main").style.marginLeft = "260px";
  document.getElementById("p_info_1").style.marginLeft = "350px";
  document.getElementById("p_info_2").style.marginLeft = "350px";
  document.getElementById("p_info_3").style.marginLeft = "350px";
  document.getElementById("p_info_4").style.marginLeft = "350px";
  document.getElementById("p_info_5").style.marginLeft = "350px";
  document.getElementById("p_info_6").style.marginLeft = "350px";
  document.getElementById("p_info_7").style.marginLeft = "350px";
  document.getElementById("p_info_8").style.marginLeft = "350px";
  document.getElementById("p_info_9").style.marginLeft = "350px";
  document.getElementById("p_info_10").style.marginLeft = "350px";
  function myFunction(x) {
    if (x.matches) {
      document.getElementById("p_info_1").style.visibility = "hidden";
      document.getElementById("p_info_2").style.visibility = "hidden";
      document.getElementById("p_info_3").style.visibility = "hidden";
      document.getElementById("p_info_4").style.visibility = "hidden";
      document.getElementById("p_info_5").style.visibility = "hidden";
      document.getElementById("p_info_6").style.visibility = "hidden";
      document.getElementById("p_info_7").style.visibility = "hidden";
      document.getElementById("p_info_8").style.visibility = "hidden";
      document.getElementById("p_info_9").style.visibility = "hidden";
      document.getElementById("p_info_10").style.visibility = "hidden";
    } else {
      document.getElementById("p_info_1").style.visibility = "visible";
      document.getElementById("p_info_2").style.visibility = "visible";
      document.getElementById("p_info_3").style.visibility = "visible";
      document.getElementById("p_info_4").style.visibility = "visible";
      document.getElementById("p_info_5").style.visibility = "visible";
      document.getElementById("p_info_6").style.visibility = "visible";
      document.getElementById("p_info_7").style.visibility = "visible";
      document.getElementById("p_info_8").style.visibility = "visible";
      document.getElementById("p_info_9").style.visibility = "visible";
      document.getElementById("p_info_10").style.visibility = "visible";
    }
  }
}

var x = window.matchMedia("(max-width: 425px)")
myFunction(x) 
x.addListener(myFunction)

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("p_info_1").style.marginLeft = "50px";
  document.getElementById("p_info_2").style.marginLeft = "50px";
  document.getElementById("p_info_3").style.marginLeft = "50px";
  document.getElementById("p_info_4").style.marginLeft = "50px";
  document.getElementById("p_info_5").style.marginLeft = "50px";
  document.getElementById("p_info_6").style.marginLeft = "50px";
  document.getElementById("p_info_7").style.marginLeft = "50px";
  document.getElementById("p_info_8").style.marginLeft = "50px";
  document.getElementById("p_info_9").style.marginLeft = "50px";
  document.getElementById("p_info_10").style.marginLeft = "50px";
}

// paste the css introduction code below at 21 give or take it

function body_onload_p() {
  document.getElementById("p_info_1").innerHTML = "CSS Introduction";
}

function css_nav() {
  document.getElementById("p_info_1").style.visibility = "visible";
  document.getElementById("p_info_2").style.visibility = "visible";
  document.getElementById("p_info_3").style.visibility = "visible";
  document.getElementById("p_info_4").style.visibility = "visible";
  document.getElementById("p_info_5").style.visibility = "visible";
  document.getElementById("p_info_6").style.visibility = "visible";
  document.getElementById("p_info_7").style.visibility = "visible";
  document.getElementById("p_info_8").style.visibility = "visible";
  document.getElementById("p_info_9").style.visibility = "visible";
  document.getElementById("p_info_10").style.visibility = "visible";
  document.getElementById("p_info_1").innerHTML = "CSS Introduction";
  document.getElementById("p_info_1").style.fontSize = "20px";
  document.getElementById("p_info_2").innerHTML = "* Full form of CSS is Cascading Style Sheet." + "<br>" + "* CSS is present in every of the programers website." + "<br>" + "* CSS is a way to present 1 or many HTML files.";
  document.getElementById("p_info_2").style.fontSize = "15px";
  document.getElementById("p_info_3").innerHTML = "CSS Examples :";
  document.getElementById("p_info_3").style.fontSize = "20px";
  document.getElementById("p_info_4").innerHTML = "* CSS has a many properties."+"<br>";
  document.getElementById("p_info_4").style.fontSize = "15px";
  document.getElementById("p_info_5").innerHTML = "CSS Properties (* These are the few in many properties)" + "<image src='right_down_arrow.png' width='18px' height='18px'>" + "<br>";
  document.getElementById("p_info_5").style.fontSize = "15px";
  document.getElementById("p_info_6").innerHTML = "background-color: red;" + "<br>" + "text-align: center;" + "<br>" + "font-size: 25px;" + "<br>" + "width: 500px;" + "<br>" + "height: 100%;" + "<br>" + "";
  document.getElementById("p_info_6").style.fontSize = "15px";
}