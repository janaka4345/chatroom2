'use client'
import { useEffect, useState } from 'react'
import { socket } from '@/socket'
import { setOnlineUserStatus } from '@/serverActions/users/onlineUser'

const useSocket = () => {
    const [isConnected, setIsConnected] = useState(false)
    const [transport, setTransport] = useState('N/A')

    useEffect(() => {
        if (socket.connected) {
            onConnect()
        }

        async function onConnect() {
            setIsConnected(true)
            setTransport(socket.io.engine.transport.name)
            // console.log('connected')
            await setOnlineUserStatus({ socketId: socket.id, status: true })

            socket.io.engine.on('upgrade', (transport) => {
                setTransport(transport.name)
            })
        }

        async function onDisconnect() {
            setIsConnected(false)
            setTransport('N/A')
            // console.log('disconnected')
            // await setOnlineUserStatus({ socketId: null, status: false })
        }

        socket.on('connect', onConnect)
        socket.on('disconnect', onDisconnect)

        // //listening for the message
        // socket.on('message', (data) => {
        // console.log(data);

        // })

        return () => {
            socket.off('connect', onConnect)
            socket.off('disconnect', onDisconnect)
        }
    }, [])
    return [isConnected, transport]
}
export default useSocket
