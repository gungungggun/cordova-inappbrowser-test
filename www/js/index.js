var app = {
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  onDeviceReady: function() {
    document.getElementById("open1").addEventListener("click", this.open1);
    document.getElementById("open2").addEventListener("click", this.open2);
    this.receivedEvent('deviceready');
  },
  open1: function() {
    cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=no,footer=yes,footercolor=#cc00ff,zoom=no');
  },
  open2: function() {
    cordova.ThemeableBrowser.open('http://apache.org', '_blank', {
      statusbar: {
        color: '#ffffffff'
      },
      toolbar: {
        height: 44,
        color: '#BB0000ff'
      },
      title: {
        color: '#003264ff',
        staticText: "\u3042",
        showPageTitle: false
      },
      backButton: {
        wwwImage: 'img/back_pressed.png',
        wwwImagePressed: 'img/back_pressed.png',
        align: 'left',
        event: 'backPressed'
      },
      forwardButton: {
        wwwImage: 'img/forward_pressed.png',
        wwwImagePressed: 'img/forward_pressed.png',
        align: 'left',
        event: 'forwardPressed'
      },
      closeButton: {
        wwwImage: 'img/close_pressed.png',
        wwwImagePressed: 'img/close_pressed.png',
        align: 'right',
        event: 'closePressed'
      },
      backButtonCanClose: true
    })
  },
  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  }
};

app.initialize();
