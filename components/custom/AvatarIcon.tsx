import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
const AvatarIcon = ({
    image,
    name,
    className,
}: {
    image: string;
    name: string;
    className?: string;
}) => {
    return (
        <Avatar className={className}>
            <AvatarImage src={image} alt="avatar" />
            <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
    );
};
export default AvatarIcon;
