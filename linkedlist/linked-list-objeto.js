import { defaultEquals } from "../utils/utils"

class LinkedList {
  constructor (equalsFn=defaultEquals) {
    this.__length = 0
    this.__head = undefined
    this.__equalsFn = equalsFn
  }
}
