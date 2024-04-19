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
        <pre>{JSON.stringify(messages, null, 2)}</pre>

        {/* <MessageBox message="hiya sup2" type="RECEIVE" />
        <MessageBox message="hiya sup" type="SEND" /> */}


      </section >
      <MessageInput receiverId={params.id} />
    </>
  )
}