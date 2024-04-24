// Time: Change Greeting
let kodeloftet = "Kodeloftet";

let time = new Date().getHours(),
  greeting = 'Good '+ (time < 12 ? `Morning, ${kodeloftet}` :
    time < 18 ? `Afternoon, ${kodeloftet}` : `Evening, ${kodeloftet}`);
document.getElementById('greetingOutput').innerHTML = greeting;

console.log(time);
console.log(greeting);

// Button: Change Theme
let buttonChangeTheme = document.getElementById("theme-changer");

function changeTheme() {
  // const body = document.getElementById("body");
  const root = document.documentElement;

  const currentTheme = root.dataset.theme;
  // const changeTheme =

  const isLight = currentTheme === "light";

  if (isLight) {
    root.dataset.theme = "dark";
  } else {
    root.dataset.theme = "light";
  }
}

buttonChangeTheme.addEventListener('click', changeTheme);
