import AvatarGroup from "@/components/custom/AvatarGroup";

export type Avatars = {
    name: string,
    src: string
}

const BentoMessage = () => {
    const messageAvatars: Avatars[] = [{
        name: 'Jenna Sanders',
        src: '/avatars/avatar1.png',
    }, {
        name: 'Neela hawking',
        src: '/avatars/avatar2.png',
    }, {
        name: 'John kierstien',
        src: '/avatars/avatar3.png',
    }, {
        name: 'John doe',
        src: '/avatars/avatar4.png',
    }]

    const requestAvatars: Avatars[] = [{
        name: 'Nimali Dunkin',
        src: '/avatars/avatar5.png',
    }, {
        name: 'Neil Patrick',
        src: '/avatars/avatar6.png',
    }]
    return (
        <div className="relative mx-auto flex h-[168px]  w-[168px] items-center justify-center  overflow-hidden rounded-lg">
            <div className="absolute left-1/2 top-1/2 z-0 h-8 w-[120px]  origin-top-left animate-spin-slow  bg-gradient-to-t  from-white" />
            <div style={{ background: 'radial-gradient(circle at 0px 0px, hsl(var(--primary))  0%, hsl(var(--accent)) 100%)' }} className="z-10 h-40 w-40 rounded-lg  flex flex-col gap-1">
                <h1 className="text-primary-foreground mt-4  ml-4 ">Messages <span>4</span> </h1>
                <AvatarGroup avatars={messageAvatars} className="ml-auto h-8" />
                <h1 className="text-primary-foreground  ml-4">Requests <span>2</span>  </h1>
                <AvatarGroup avatars={requestAvatars} className="ml-auto h-8" />
            </div>
        </div>
    );
};
export default BentoMessage;
