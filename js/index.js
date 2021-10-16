class Timer{
    constructor(selector, targetDate){
        this.targetDate = targetDate
        this.interval = null
        this.deltaTime = 0
        //this.select = document.querySelector(selector) 
        this.start()
        }
    start(){
    this.interval = setInterval(()=> {
        let currentTime = Date.now()
        this.deltaTime = this.targetDate - currentTime
        
        this.refs.days.textContent = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)))
        this.refs.hours.textContent = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        this.refs.mins.textContent = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)))
        this.refs.secs.textContent = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000))
}, 1000);}
    // stop(){
    //     clearInterval(this.interval)
    refs = {
        days : document.querySelector('[data-value="days"]'),
        hours : document.querySelector('[data-value="hours"]'),
        mins : document.querySelector('[data-value="mins"]'),
        secs : document.querySelector('[data-value="secs"]'),
    }
    pad(v){
        return String(v).padStart(2, '0')
    }
    
}
const thisTimer = new Timer(
    selector = "#timer-1",
    targetDate = new Date('Jan 1, 2022'),
  );
const thetTimer = new Timer(
    selector = "#timer-2",
    targetDate = new Date('Jan 14, 2022'),
  );

  
 
console.log('timer 1', thetTimer);
console.log('timer 2',thisTimer);

//////////////////////////
// 

///////////////////////////




/////////////////////////////// 
// const currentDate = document.querySelector('body')
// const options = {
// weekday: 'short',
// year: 'numeric',
// month: 'long',
// day: 'numeric',
// }
// const d = new Date
// const currentTimeNow = d.toLocaleString('Uk-uk', options)
// console.log(currentTimeNow);

// const currentDateTitle = document.createElement('h1')
// currentDateTitle.classList.add('title')
// currentDateTitle.style.textAlign = 'center'
// currentDateTitle.textContent = currentTimeNow
// currentDate.prepend(currentDateTitle)