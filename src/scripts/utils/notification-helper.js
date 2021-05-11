const NotificationHelper = {
  sendNotification({ title, options }) {
    if (!this._checkAvailability()) {
      console.log("Notification NOT Supported in this Brouser!");
      return;
    }
    if (!this._checkPermission()) {
      console.log("User Did Not Yet Granted Permission");
      this._requestPermission();
    }
    this._showNotification({ title, options });
  },

  _checkAvailability() {
    return !!("Notification" in window);
  },

  _checkPermission() {
    return Notification.permission === "granted";
  },

  async _requestPermission() {
    const status = await Notification.requestPermission();

    if (status === "denied") {
      console.log("Notification Denied");
    }

    if (status === "default") {
      console.log("Permission closed");
    }
  },

  async _showNotification({ title, options }) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration.showNotification(title, options);
  },
};

export default NotificationHelper;
