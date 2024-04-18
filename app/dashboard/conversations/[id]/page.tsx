import { auth } from "@/auth"

export default async function conversationsPage({ params }: { params: { id: string } }) {
  const session = await auth()
  return (
    <>
      <div>conversation of a user {params.id} </div>
      <pre>{JSON.stringify(session, null, 2)}</pre></>
  )
}