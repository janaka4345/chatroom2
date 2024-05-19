import AvatarIcon from './AvatarIcon'


const UserAvatar = ({ image, name }: { image: string, name: string }) => {
    return (
        <AvatarIcon image={image} name={name} />
        // TODO user details popup 

    )
}
export default UserAvatar