var MinStack = function () {
    this.item = [];
    this.minStack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (value) {
    this.item.push(value);

    if (
        this.minStack.length === 0 ||
        value <= this.minStack[this.minStack.length - 1]
    ) {
        this.minStack.push(value);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.item.length === 0) return null;

    const removed = this.item.pop();

    if (removed === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }

    return removed;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.item.length === 0) return null;
    return this.item[this.item.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.minStack.length === 0) return null;
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */var MinStack = function () {
    this.item = [];
    this.minStack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (value) {
    this.item.push(value);

    if (
        this.minStack.length === 0 ||
        value <= this.minStack[this.minStack.length - 1]
    ) {
        this.minStack.push(value);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.item.length === 0) return null;

    const removed = this.item.pop();

    if (removed === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }

    return removed;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.item.length === 0) return null;
    return this.item[this.item.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.minStack.length === 0) return null;
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */