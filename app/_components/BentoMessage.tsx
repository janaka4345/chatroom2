import AvatarGroup from "../../components/custom/AvatarGroup";

export type Avatars = {
    name: string,
    src: string
}

const BentoMessage = () => {
    const avatars: Avatars[] = [{
        name: 'Jenna Sanders',
        src: '/avatars/avatar1.png',
    }, {
        name: 'Neela hawking',
        src: '/avatars/avatar2.png',
    }, {
        name: 'John kierstien',
        src: '/avatars/avatar3.png',
    }]
    return (
        <div className="relative mx-auto flex h-[168px]  w-[168px] items-center justify-center  overflow-hidden rounded-lg">
            <div className="absolute left-1/2 top-1/2 z-0 h-8 w-[120px]  origin-top-left animate-spin-slow  bg-gradient-to-t  from-white" />
            <div style={{ background: 'radial-gradient(circle at 0px 0px, hsl(var(--primary))  0%, hsl(var(--accent)) 100%)' }} className="z-10 h-40 w-40 rounded-lg ">
                <h1 className="text-primary-foreground mt-4 ml-4 ">Messages <span>10</span> </h1>
                <AvatarGroup avatars={avatars} />
                <h1 className="text-primary-foreground mt-4 ml-4">Requests <span>3</span>  </h1>
            </div>
        </div>
    );
};
export default BentoMessage;
