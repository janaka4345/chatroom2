import AvatarIcon from './AvatarIcon';

const UserAvatar = ({ image, name }: { image: string; name: string }) => {
    return (
        <AvatarIcon
            image={image}
            name={name}
            // className='w-4 h-4 md:w-10 md:h-10'
        />
        // TODO user details popup
    );
};
export default UserAvatar;
