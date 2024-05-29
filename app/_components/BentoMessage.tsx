import AvatarGroup from '@/components/custom/AvatarGroup';

export type Avatars = {
    name: string;
    src: string;
};
const messageAvatars: Avatars[] = [
    {
        name: 'Jenna Sanders',
        src: '/avatars/avatar1.png',
    },
    {
        name: 'Neela hawking',
        src: '/avatars/avatar2.png',
    },
    {
        name: 'John kierstien',
        src: '/avatars/avatar3.png',
    },
    {
        name: 'John doe',
        src: '/avatars/avatar4.png',
    },
];

const requestAvatars: Avatars[] = [
    {
        name: 'Nimali Dunkin',
        src: '/avatars/avatar5.png',
    },
    {
        name: 'Neil Patrick',
        src: '/avatars/avatar6.png',
    },
];
const BentoMessage = () => {
    return (
        <div
            style={{
                background:
                    'radial-gradient(circle at 0px 0px, hsl(var(--primary))  0%, hsl(var(--accent)) 100%)',
            }}
            className=" mx-[4px] flex h-[calc(100dvh/5-10px)] w-full flex-col  gap-0 rounded-lg md:h-48 md:gap-2"
        >
            <h1 className="ml-4 mt-2 text-lg text-primary-foreground md:mt-4 md:text-xl lg:text-2xl ">
                Messages <span className=" animate-pulse">4</span>{' '}
            </h1>
            <AvatarGroup
                avatars={messageAvatars}
                className="ml-auto h-4 md:h-8"
            />
            <h1 className="ml-4 text-lg text-primary-foreground md:text-xl  lg:text-2xl">
                Requests <span className="animate-pulse">2</span>{' '}
            </h1>
            <AvatarGroup
                avatars={requestAvatars}
                className="ml-auto h-4 md:h-8"
            />
        </div>
    );
};
export default BentoMessage;
