let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");
const executeCodes = () => {
  //if cookie contains codinglab it will be returned and below of this code will not run
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");
      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};
//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);
const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}

function displayImage(event) {
   var image = document.getElementById('profileImage');
   var file = event.target.files[0];
   var reader = new FileReader();

   reader.onload = function() {
      image.src = reader.result;
   }

   reader.readAsDataURL(file);
}

function redirectToPage() {
   var searchInput = document.getElementById("searchInput").value.toLowerCase();
   switch (searchInput) {
       case "html":
           window.location.href = "playlist1.html";
           break;
       case "css":
         window.location.href = "playlist1.html";
           break;
       case "javascript":
         window.location.href = "playlist2.html";
           break;
       case "bootstrap":
         window.location.href = "playlist3.html";
           break;
       case "jquery":
         window.location.href = "playlist4.html";
           break;
       case "sass":
         window.location.href = "playlist5.html";
           break;
       case "mysql":
         window.location.href = "playlist6.html";
           break;
       case "php":
         window.location.href = "playlist7.html";
           break;
       case "react":
         window.location.href = "playlist8.html";
           break;
       default:
           alert("No solution found for this option.");
   }
}

