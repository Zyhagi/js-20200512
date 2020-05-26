export default class NotificationMessage {
  element;

  static destroyCurrentNotification;

  constructor(message, {type = "success", duration = 2000} = {}) {
    this.message = message;
    this.type = type;
    this.duration = duration;
    this.render();
  }

  render() {
    const temp = document.createElement('div')
    temp.innerHTML = `<div class="notification ${this.type}" style="--value:${this.duration/1000}s">
    <div class="timer"></div>
    <div class="inner-wrapper">
      <div class="notification-header">${this.type}</div>
      <div class="notification-body">
        ${this.message}
      </div>
    </div>
  </div>`;

    this.element = temp.firstElementChild;
  }

  show(targetElement = notificationContainer) {

    if(NotificationMessage.destroyCurrentNotification){
      NotificationMessage.destroyCurrentNotification();
    }

    targetElement?.appendChild(this.element);
    NotificationMessage.destroyCurrentNotification = () => this.destroy();
    this.timeout = setTimeout(() => this.destroy(), this.duration);
  }

  remove() {
    clearTimeout(this.timeout);
    this.element.remove();
    NotificationMessage.destroyCurrentNotification = null;
  }

  destroy() {
    this.remove();
  }
}
const notificationContainer = document?.getElementById('btn1')?.parentElement;
