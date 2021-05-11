const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMesssageHandler;
  },
  _onMesssageHandler(message) {
    console.log(message.data);
  },
};
export default WebSocketInitiator;
