// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
    }
    insertFirst(data) {
        this.insertAt(data, 0);
    }
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
    getFirst() {
        return this.getAt(0);
    }
    getLast() {
        return this.getAt(this.size() - 1);
    }
    clear() {
        this.head = null;
    }
    removeFirst() {
        this.removeAt(0);
    }
    removeLast() {
        this.removeAt(this.size() - 1);
    }
    insertLast(data) {
        this.insertAt(data, this.size());
        // const node = this.getLast();
        // if (node) {
        //     node.next = new Node(data);
        // } else {
        //     this.head = new Node(data);
        // }
    }
    getAt(index) {
        let node = this.head;
        let counter = 0;
        while (node && counter < index) {
            node = node.next;
            counter++;
        }
        return node;
    }
    removeAt(index) {
        if (!this.head) return;
        if (index === 0) {
            this.head = this.head.next;
            return;
        } 
        const prev = this.getAt(index - 1);
        if (prev && prev.next) {
            prev.next = prev.next.next;
        }
    }
    insertAt(data, index) {
        if (index === 0 || !this.head) {
            this.head = new Node(data, this.head);
            return;
        }
        const prev = this.getAt(index - 1) || this.getLast();
        const newNode = new Node(data, prev.next);
        prev.next = newNode;
    }
    forEach(fn) {
        let node = this.head;
        while (node) {
            fn(node);
            node = node.next;
        }
    }
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
