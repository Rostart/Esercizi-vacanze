let elemento = document.getElementById('monitorare');

elemento.addEventListener('mousemove', (event) => {
  let x = event.clientX;
  let y = event.clientY;
  
  console.clear();
  console.log(`Coordinate X: ${x}, Coordinate Y: ${y}`);
});
