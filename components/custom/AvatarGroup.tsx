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
                ' flex  w-fit origin-left flex-row -space-x-3 transition-all duration-150 hover:-space-x-2',
                className
            )}
        >
            {avatars.map((avatar) => (
                <AvatarIcon
                    key={avatar.name}
                    image={avatar.src}
                    name={avatar.name}
                    className="h-6 w-6 duration-100 hover:h-7 hover:w-7 hover:-translate-y-2 "
                />
            ))}
        </div>
    );
};
export default AvatarGroup;
