import { cn } from "@/lib/utils"

const MessageBox = ({ message, type }: { message: string, type: "RECEIVE" | "SEND" }) => {
  return (
    // <div>MessageBox {message} {type}</div>
    <div className={cn(`w-[100px] h-[100px] rounded-xl m-4`, {
      "bg-blue-500 ": type === "RECEIVE",
      "bg-gray-500 ml-auto": type === "SEND",
    })}>
      {message}
    </div>
  )
}
export default MessageBox