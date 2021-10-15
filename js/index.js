const days = document.querySelector('[data-value="days"]');
const hours = document.querySelector('[data-value="hours"]');
const mins = document.querySelector('[data-value="mins"]');
const secs = document.querySelector('[data-value="secs"]');
const currentDate = document.querySelector('body')
class Timer{
    constructor(selector, targetDate){
        this.targetDate = targetDate
        this.interval = null
        this.deltaTime = 0
        this.selector = document.querySelector(selector) 
        this.start()
        }
    start(){
    this.interval = setInterval(()=> {
        let currentTime = Date.now()
        this.deltaTime = this.targetDate - currentTime
        days.textContent = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)))
        hours.textContent = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        mins.textContent = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)))
        secs.textContent = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000))
}, 1000);}
    // stop(){
    //     clearInterval(this.interval)

    pad(v){
        return String(v).padStart(2, '0')
    }
    
}

const thisTimer = new Timer(
    selector = '#timer-1',
    targetDate = new Date('Jan 1, 2022'),
  );
const thetTimer = new Timer(
    selector = '#timer-2',
    targetDate = new Date('Jan 3, 2022'),
  );
 
console.log(thetTimer);
console.log(thisTimer);








/////////////////////////////// 
const options = {
weekday: 'short',
year: 'numeric',
month: 'long',
day: 'numeric',
}
const d = new Date
const currentTimeNow = d.toLocaleString('Uk-uk', options)
console.log(currentTimeNow);

const currentDateTitle = document.createElement('h1')
currentDateTitle.classList.add('title')
currentDateTitle.style.textAlign = 'center'
currentDateTitle.textContent = currentTimeNow
currentDate.prepend(currentDateTitle)