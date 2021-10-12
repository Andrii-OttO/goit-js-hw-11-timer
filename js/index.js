const days = document.querySelector('[data-value="days"]');
const hours = document.querySelector('[data-value="hours"]');
const mins = document.querySelector('[data-value="mins"]');
const secs = document.querySelector('[data-value="secs"]');
const currentDate = document.querySelector('body')

class Timer{
    constructor(finishDate){
        this.finishDate = finishDate
        this.interval = null
        this.deltaTime = 0
    }
    start(){console.log('start')
    this.interval = setInterval(()=> {
        let currentTime = Date.now()
        //console.log('current time', currentTime); 
        this.deltaTime = this.finishDate - currentTime
        //console.log('delta', this.deltaTime);
        
        days.textContent = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)));
        hours.textContent = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        mins.textContent = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
        secs.textContent = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000))
    }, 1000);}
    stop(){
        clearInterval(this.interval)
    }
    pad(v){
        return String(v).padStart(2, '0')
    }
}

const thisTimer = new Timer(new Date('Jan 1, 2022'))
thisTimer.start()
//thisTimer.stop()
console.log(thisTimer);

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
