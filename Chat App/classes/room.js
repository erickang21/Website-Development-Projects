class Room {
  constructor(roomId, roomTitle, namespace, privateRoom=false) {
    this.roomId=roomId;
    this.roomTitle=roomTitle;
    this.namespace=namespace;
    this.privateRoom=privateRoom;
    this.history=[];
  }

  addMsg(msg) {
    this.history.push(msg)
  }

  clearHistory() {
    this.history=[]
  }
}

export default Room