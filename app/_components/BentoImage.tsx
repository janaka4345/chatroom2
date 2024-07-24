import Image from 'next/image';

const BentoImage = () => {
    return (
        <Image
            src="/image.png"
            alt="banner image"
            fill
            className="rounded-2xl object-cover"
        />
    );
};
export default BentoImage;
