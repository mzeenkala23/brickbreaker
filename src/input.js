export default class InputHandler {
  constructor() {
    document.addEventListener("keydown", e => {
      alert(e.keyCode);
    });
  }
}
