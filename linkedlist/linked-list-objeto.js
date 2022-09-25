const { defaultEquals } = require('../utils/utils')
const { Node } = require('./node')
class LinkedList {
  constructor (equalsFn = defaultEquals) {
    this.__length = 0
    this.__head = null
    this.__equalsFn = equalsFn
  }
  push (element) {
    const node = new Node(element)
    let current
    if (this.__head == null) {
      this.__head = node
    } else {
      current = this.__head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.__length++
  }
}
module.exports = {
  LinkedList
}
