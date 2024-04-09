import ConversationCard from './ConversationCard'

export default function Conversations() {
    return (
        <div className="overflow-y-auto">
            <h1>Conversations</h1>
            <div className="flex flex-col gap-2 ">
                {[...Array(9)].map((_, i) => (
                    <ConversationCard key={i} />
                ))}
            </div>
        </div>
    )
}
