const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log(`timer started 😎`);
  },
  onTick() {
    console.log(`tick tock`);
  },
  onComplete() {
    console.log(`timer completed ✅`);
  },
});
