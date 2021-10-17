class Timer{
  constructor(selector, targetDate){
      this.targetDate = targetDate
      this.interval = null
      this.deltaTime = 0
      this.item = selector
      
      //this.select = document.querySelector(selector) 
      this.start()
      console.log('123',this.item);
      }
  start(){
  this.interval = setInterval(()=> {
      let currentTime = Date.now()
      this.deltaTime = this.targetDate - currentTime
      //this.getTimeF(this.refs(this.deltaTime))
      const days = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)));
      const hours = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000));
     this.refs(days,hours,mins,secs)
      //console.log({days,hours,mins,secs}(this.refs(this.item)));
}, 1000);}
  // stop(){
  //     clearInterval(this.interval)
  //getElementById
   refs(){
    days = this.item.querySelector('[data-value="days"]').textContent;
    hours = this.item.querySelector('[data-value="hours"]').textContent;
    mins =  this.item.querySelector('[data-value="mins"]').textContent;
    secs = this.item.querySelector('[data-value="secs"]').textContent;
    //return {days,hours,mins,secs}
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


// console.log('timer 1', thetTimer);
// console.log('timer 2',thisTimer);
  // getTimeF(){
  //      //return {days, hours, mins, secs}
  //     //console.log(getTimeF);
  //     console.log('123',{days, hours, mins, secs});
  // }
  

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