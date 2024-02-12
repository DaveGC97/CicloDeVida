//Intalación
self.addEventListener('install', event => {
    //Descargar assets
    //Crear cache
    console.log('Service Worker instalado');

    //Simular la instalación de un Service Worker
    const instalacion = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Terminando instalaciones ');
            self.skipWaiting();
            resolve();
        }, 1000);
    })
    event.waitUntil(instalacion)
})

//Activación
self.addEventListener('activate', event => {
    console.log('Service Worker activado y listo para controlar la app :)');
})
//Fetch: Manejo de peticiones HTTP
self.addEventListener('fetch', function (event) {



});
//Sync: Recuperamos la conexión a internet
self.addEventListener('sync', function (event) {
    console.log('Tenemos conexión!');
    console.log(event);
    console.log(event.tag);
});
self.addEventListener('push', function (event) {
    console.log('Notificación recibida')
})
