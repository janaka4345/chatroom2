import { auth } from "@/auth"
import { getPrivateMessages } from "@/serverActions/message/getMessages"
import { isMyFriend } from "@/serverActions/users/getFriends"
import MessageBox from "../_components/MessageBox"
import MessageInput from "../_components/MessageInput"

export default async function conversationsPage({ params }: { params: { id: string } }) {
  const session = await auth()
  const isFriend = await isMyFriend(params.id)
  if (!isFriend) {
    return <h1>this user is not a friend</h1>
  }

  const messages = await getPrivateMessages({ senderId: session?.user?.id as string, receiverId: params.id })
  return (
    <>
      <section className="relative overflow-y-auto h-[70svh] ">
        {/* <div>conversation of a user {params.id} </div> */}
        {/* <pre>{JSON.stringify(session, null, 2)}</pre>*/}
        {/* <pre>{JSON.stringify(messages, null, 2)}</pre> */}

        {messages.map((message) => (
          message.senderId === session?.user?.id ?
            <MessageBox key={message.id} message={message.message} image={message?.sender?.image!} name={message?.sender?.name!} type="SEND" /> :

            <MessageBox key={message.id} message={message.message} image={message?.sender?.image!} name={message?.sender?.name!} type="RECEIVE" />


        ))}



      </section >
      <MessageInput receiverId={params.id} />
    </>
  )
}