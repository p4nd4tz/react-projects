import aboutImg from "../assets/images/about.jpeg";
import Title from "./title";

const About = () => {
    return (
        <section className="p-14 mt-5">
            <Title title="about" subtitle="us" />
            <div className=" flex gap-8">
                <div className="">
                    <img src={aboutImg} alt="awesome beach" />
                </div>
                <div>
                    <h2 className="text-3xl text-gray-800 capitalize tracking-widest font-bold mb-3">
                        Explore the difference
                    </h2>
                    <p className="text-base text-gray-500 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
                        consectetur dicta nesciunt animi, blanditiis rem, incidunt, quam
                        rerum excepturi error impedit ducimus odio libero delectus?
                    </p>
                    <p className="text-base text-gray-500 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
                        consectetur dicta nesciunt animi, blanditiis rem, incidunt, quam
                        rerum excepturi error impedit ducimus odio libero delectus?
                    </p>
                    <button
                        className="bg-blue-400 text-white uppercase border-2 border-transparent inline-block tracking-widest px-4 py-1 
                        hover:bg-blue-300 hover:text-gray-800 hover:transition-all hover:ease-linear duration-700"
                    >
                        read more
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
