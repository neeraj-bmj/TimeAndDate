
function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();




function updateDate() {
  const dateElement = document.getElementById('date');
  const now = new Date();

  const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', options);

  dateElement.textContent = formattedDate;
}

updateDate(); // Run once on load