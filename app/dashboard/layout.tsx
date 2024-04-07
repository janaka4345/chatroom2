import Sidebar from "./_components/Sidebar"

export default function layout({
    children, 
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className="flex flex-row gap-4 mx-4 p-4 h-[100svh]">
    <div className="w-1/5 bg-red-500"><Sidebar/></div>
    <div className="w-4/5 bg-green-500">{children}</div>
    </div>
  )
}