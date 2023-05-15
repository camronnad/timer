const args = process.argv.slice(2);

const alarm = (time) => {
  if (isNaN(time) || time < 0) {
    return;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, Number(time) * 1000);
};

for (const item of args) {
  alarm(item)
  
}


