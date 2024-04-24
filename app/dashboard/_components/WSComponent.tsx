'use client'

import { revalidateTest } from "@/serverActions/test/page"
import { socket } from "@/socket"
import useSocket from "@/utils/useSocket"
import { toast } from "sonner"
import { useEffect } from "react"

const WSComponent = () => {
    const [isConnected, transport] = useSocket()
    useEffect(() => {

        socket.on('userMessage', async (data) => {
            // console.log('message', data)
            toast(`message${data.message}`)
            await revalidateTest()
        })
        socket.on('revalidateUser', async () => {
            await revalidateTest()
        })
        socket.on('revalidateAll', async () => {
            await revalidateTest()
        })

        // console.log(socket.id);

        return () => {

        }
    }, [])

    return (
        // <div className="bg-yellow-500 w-fit">
        //     <p>Status: {isConnected ? "connected" : "disconnected"}</p>
        //     <p>Transport: {transport}</p>
        // </div>
        null
    )
}
export default WSComponent