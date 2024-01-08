function updateClock() {
    const now = new Date();
    const hours = String(now.getHours());
    const minutes = String(now.getMinutes());
    const seconds = String(now.getSeconds());
    const timeString = `${hours}h:${minutes}m:${seconds}s`;
    document.getElementById('time').textContent = timeString;
  }
  
  updateClock();
  setInterval(updateClock, 1000);