let kodeloftet = "Kodeloftet";

let time = new Date().getHours(),
  greeting = 'Good '+ (time < 12 ? `Morning, ${kodeloftet}` :
    time < 18 ? `Afternoon, ${kodeloftet}` : `Evening, ${kodeloftet}`);
document.getElementById('greetingOutput').innerHTML = greeting;

console.log(time);
console.log(greeting);
