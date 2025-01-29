// 1
const notifications = [
    {
        source: 'email',
        text: 'hello',
        date: new Date(),
    },
    {
        source: 'phone',
        text: 'hello111',
        date: new Date(),
    },
    {
        source: 'chat',
        text: 'hello222',
        date: new Date(),
    },
    {
        source: 'chat',
        text: 'hello333',
        date: new Date(),
    },
    {
        source: 'phone',
        text: 'hello444',
        date: new Date(),
    },
];
const groupedNotifications = Object.groupBy(notifications, item => item.source);

groupedNotifications[Symbol.iterator] = function () {
    let sources = Object.keys(this);
    let currentSourceIndex = 0;
    let currentNotificationIndex = 0;
    let self = this;

    return {
        next() {
            while (currentSourceIndex < sources.length) {
                let source = sources[currentSourceIndex];
                if (currentNotificationIndex < self[source].length) {
                    return {
                        value: self[source][currentNotificationIndex++],
                        done: false
                    };
                } else {
                    currentNotificationIndex = 0;
                    currentSourceIndex++;
                }
            }
            return { done: true };
        }
    }
}

for (let value of groupedNotifications) {
    console.log(value);
};

//2
function sqr(x, cache) {
    if (!cache.has(x)) {
        cache.set(x, x * x);
    }
    return cache.get(x);
}
const cache = new Map();
console.log(sqr(4, cache));
console.log(sqr(4, cache));
console.log(sqr(5, cache));
console.log(sqr(5, cache));

console.log(cache);

