import Image from "next/image"

const BentoImage = () => {
    return (
        <Image src='/image.png' alt='banner iamge' fill className="object-cover rounded-2xl" />
    )
}
export default BentoImage