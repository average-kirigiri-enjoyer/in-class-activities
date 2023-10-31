// create the Queue class with two methods to remove and add an element
class Queue {
  //initializes queue as an empty array
  constructor(queue = []) {
    this.queue = queue;
  }

  //adds item to back of queue
  addToQueue(item) {
    return this.queue.push(item);
  }

  //removes item from front of queue
  removeFromQueue() {
    return this.queue.shift();
  }
}

module.exports = Queue;