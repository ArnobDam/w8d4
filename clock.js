class Clock {
    constructor() {
        this.date = new Date();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
        this.printTime();
        // let that = this;
        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        let hours;
        let minutes;
        let seconds;
        if (this.hours < 10) {
            hours = `0${this.hours}`
        } else {
            hours = `${this.hours}`
        }
        if (this.minutes < 10) {
            minutes = `0${this.minutes}`
        } else {
            minutes = `${this.minutes}`
        }

        if (this.seconds < 10) {
            seconds = `0${this.seconds}`
        } else {
            seconds = `${this.seconds}`
        }

        console.log(`${hours}:${minutes}:${seconds}`)
    }

    _tick() {
        // let that = this;
        this.seconds++;
        // console.log(this);
        this.printTime();
    }

}



const clock = new Clock();