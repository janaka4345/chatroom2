'use client'

import { revalidateRequest } from "@/serverActions/revalidate/revalidateRequest"
import { socket } from "@/socket"
import useSocket from "@/utils/useSocket"
import { toast } from "sonner"
import { useEffect } from "react"
import MessageToast from "@/components/custom/MessageToast"
import { FriendRequestAcceptedToast, FriendRequestSentToast } from "@/components/custom/FriendRequestToast"

const WSComponent = () => {
    const [isConnected, transport] = useSocket()
    // console.log({ id: socket.id });

    useEffect(() => {

        socket.on('userMessage', async (data) => {
            // console.log('message', data)
            // toast(`message${data.message}`)
            toast(< MessageToast image={data?.image} name={data?.name} message={data.message} />);

            await revalidateRequest()
        })

        socket.on('userRequest', async (data) => {
            console.log('message', data)
            // toast(`message${data.message}`)
            toast(<FriendRequestSentToast image={data?.image} name={data?.name} message={data.message} senderId={data.senderId} />);

            await revalidateRequest()
        })

        socket.on('userRequestAccepted', async (data) => {
            // toast(`message${data.message}`)
            toast(<FriendRequestAcceptedToast image={data?.image} name={data?.name} message={data.message} />);

            await revalidateRequest()
        })
        socket.on('revalidateUser', async () => {
            await revalidateRequest()
        })
        socket.on('revalidateAll', async () => {
            await revalidateRequest()
        })

        // console.log(socket.id);

        return () => {
            socket.off('userMessage', async (data) => {
                toast(`message ${data.message}`)
                await revalidateRequest()
            })
            socket.off('revalidateUser', async () => {
                await revalidateRequest()
            })
            socket.off('revalidateAll', async () => {
                await revalidateRequest()
            })
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