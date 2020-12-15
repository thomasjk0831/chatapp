const server = require('express')()

const http = require('http').createServer(server)
const io = require('socket.io')(http)

io.on('connection', socket => {
    socket.on('message', ({ name, message }) => {
        io.emit('message', { name, message })
    })
})



http.listen(4000, () => {
    console.log('listening on 4000')
})