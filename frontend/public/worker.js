console.log('service worker loaded');
self.addEventListener('push', ev => {
    const data = ev.data.json();
    console.log('Got push', data);
    self.registration.showNotification('Local Genius', {
        body: data.txt,
        icon: 'https://i.imgur.com/0DsfRvn.png'
    });
});