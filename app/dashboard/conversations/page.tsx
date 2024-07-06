import ActiveFriends from "../_components/ActiveFriends";

const page = () => {
    return (
        <>
            <ActiveFriends />
            <section className="  rounded-3xl  border-2 relative h-[90svh] overflow-y-auto bg- bg-red-500">
                <p>select a conversation</p>
            </section>
        </>

    );
};
export default page;
