const publicVapidKey = 'BOf0qAhBz4a-lxagLIqN5ns4y6F4s2Ptailr_RP0abwLiozIceJ0EmZR8a7sHsR0wxSdhdtdbdpaZN4vfBRUS3o';

async function run() {
    if ('serviceWorker' in navigator) {
        console.log('Registering service worker');
        const registration = await navigator.serviceWorker.
            register('/worker.js', { scope: '/' });
        console.log('Registered service worker');

        console.log('Registering push');
        const subscription = await registration.pushManager.
            subscribe({
                userVisibleOnly: true,
                // The `urlBase64ToUint8Array()` function is the same as in
                // https://www.npmjs.com/package/web-push#using-vapid-key-for-applicationserverkey
                applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
            });
        console.log('Registered push');

        console.log('Sending push');
        await fetch('/subscribe', {
            method: 'POST',
            body: JSON.stringify(subscription),
            headers: {
                'content-type': 'application/json'
            }
        });
        console.log('Sent push');
    } else console.log('push not supported');
}