const Home = () => {
    return (
        <section className="h-screen bg-blue-400 flex justify-center items-center">
            <div className="w-4/5 m-auto flex flex-col gap-5 justify-center items-center text-white text-center">
                <h1 className="text-6xl uppercase font-bold tracking-wider">
                    Continue Exploring
                </h1>
                <p className="text-lg tracking-widest w-3/5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet tempora
                    perferendis nesciunt velit quibusdam.
                </p>
                <button
                    className="p-5 px-10 tracking-widest uppercase text-blue-500 bg-white 
                    border-2 border-white hover:text-white hover:bg-transparent hover:transition-all hover:ease-linear duration-700"
                >
                    Explore Tours
                </button>
            </div>
        </section>
    );
};

export default Home;
