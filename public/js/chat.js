const socket = io()

socket.on('countUpdated', (count) => {
    console.log('Count updated', count)
})

document.querySelector('#increment').addEventListener('click', () => {
    console.log('hello')

    socket.emit('increment')
})