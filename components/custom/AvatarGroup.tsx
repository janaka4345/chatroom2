import AvatarIcon from '@/components/custom/AvatarIcon';
import { Avatars } from '../../app/_components/BentoMessage';
import { cn } from '@/lib/utils';

const AvatarGroup = ({
    avatars,
    className,
}: {
    avatars: Avatars[];
    className?: string;
}) => {
    return (
        <div
            className={cn(
                ' flex  w-fit origin-left flex-row -space-x-3 transition-all duration-300 hover:-space-x-2',
                className
            )}
        >
            {avatars.map((avatar) => (
                <AvatarIcon
                    key={avatar.name}
                    image={avatar.src}
                    name={avatar.name}
                    className="h-8 md:h-10 w-8 md:w-10 duration-300 hover:h-12 hover:w-12 hover:-translate-y-2 "
                />
            ))}
        </div>
    );
};
export default AvatarGroup;
