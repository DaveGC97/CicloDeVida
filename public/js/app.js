if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
    // .then(reg => {
    //     Notification.requestPermission().then(result => {
    //         console.log(result);
    //         reg.showNotification('Hola desde mi notificación!');
    //     });
    // })
    // .catch(error => {
    //     console.error('Error al registrar el service worker:', error);
    // });
}
