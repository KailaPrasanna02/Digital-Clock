function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}h:${minutes}m:${seconds}s`;
  document.getElementById('time').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);
