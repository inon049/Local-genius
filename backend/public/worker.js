console.log('service worker loaded');

self.addEventListener('push', ev => {
    const notif = ev.data.json();
    console.log('Got push', notif)
    self.registration.showNotification('Local-Genius', {
        body: `${notif.txt}`,
        icon: 'https://i.imgur.com/yqyJgdO.png'
    });
});
