function terminalClock() {
  process.stdout.write("\r" + new Date().toLocaleTimeString());
}

setInterval(terminalClock, 1000);
