//full player data (private + public)

class Player {
  constructor(socketId, playerConfig, playerData) {
    this.socketId = socketId
    this.playerConfig = playerConfig
    this.playerData = playerData
  }
}

export default Player