import Image from 'next/image';

const BentoImage = () => {
    return (
        <Image
            src="/image.png"
            alt="banner iamge"
            fill
            className="rounded-2xl object-cover"
        />
    );
};
export default BentoImage;
