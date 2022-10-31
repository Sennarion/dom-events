const counter = {
    counterRef: document.querySelector('#value'),
    incrementBtnRef: document.querySelector('button[data-action="increment"]'),
    decrementBtnRef: document.querySelector('button[data-action="decrement"]'),

    currentCounterValue: 0,

    incrementCounter() {
        this.currentCounterValue += 1;
        this.counterRef.textContent = this.currentCounterValue;
    },

    decrementCounter() {
        this.currentCounterValue -= 1;
        this.counterRef.textContent = this.currentCounterValue;
    },
};

counter.incrementBtnRef.addEventListener('click', counter.incrementCounter.bind(counter));
counter.decrementBtnRef.addEventListener('click', counter.decrementCounter.bind(counter));
