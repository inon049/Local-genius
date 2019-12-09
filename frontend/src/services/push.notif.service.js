const publicVapidKey = 'BOf0qAhBz4a-lxagLIqN5ns4y6F4s2Ptailr_RP0abwLiozIceJ0EmZR8a7sHsR0wxSdhdtdbdpaZN4vfBRUS3o';
import httpService from './http.service'


async function send() {
    if ('serviceWorker' in navigator) {
        console.log('Registering service worker');
        // REFRESH!!!!!
        const registration = await navigator.serviceWorker.register('/worker.js', { scope: '/' });
        console.log('Registered service worker');

        console.log('Registering push');
        const subscription = await registration.pushManager.
            subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
            });
        console.log('Registered push',subscription);

        console.log('Sending push');
        await fetch('//localhost:3000/subscribe', {
            method: 'POST',
            body: JSON.stringify(subscription),
            headers: {
                'content-type': 'application/json'
            }
        });
        console.log('Sent push');
    } else console.log('push not supported');
    }
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

export default {
    send
}