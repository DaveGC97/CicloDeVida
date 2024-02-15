if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
}
if (window.caches) {
    //console.log('soporta cache')
    //Crear el primer cache
    caches.open('test-1')
    caches.open('test-2')

    //Verificar si existe un cache
    caches.has('test-1').then(console.log)

    //Eliminar un cache
    caches.delete('test-1').then(console.log)

    caches.open('cache-v1').then(cache => {
        //Agregar archivos
        cache.add('/index.html')
        //Agregar varios archivos
        cache.addAll([
            'logo192.png',
            'logo512.png',
            '/pages/offline.html'
        ]).then(() => {
            //Interceptar un archivo por otro
            cache.put('index.html'), new Response('Interceptando archivo in')
        })
        //Obtener todos los caches
        caches.keys().then(console.log)
    })
}