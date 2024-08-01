let Generate;
const GenerateRandomColor = () => {
     const hex = "0123456789ABCD";
     let color = "#";
     for (let i = 0; i < 6; i++) {
          color += hex[Math.floor(Math.random() * 16)];
     }
     return color;
}

// Generate Colors 
let randomColors = () => {
     Generate = setInterval(() => {
          document.body.style.backgroundColor = GenerateRandomColor()
     }, 1000)
}
document.getElementById('generate').addEventListener('click', randomColors);

// Stop Generate Colors
let StopGenerate = () => {
      clearInterval(Generate) 
     };
document.getElementById('stop').addEventListener('click', StopGenerate);




