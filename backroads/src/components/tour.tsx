import Title from './title';
import { tours } from '../data';

const Tours = () => {
    return (
        <section className="p-20 scroll-mt-16" id="tours">
            <Title title="featured" subtitle="tours" />
            <div className="grid gap-8 grid-cols-3 mx-auto my-0 max-w-screen-xl">
                {tours.map((tour) => {
                    const { id, img, date, title, info, location, duration, price } =
                        tour;
                    return (
                        <article key={id} className="bg-gray-100 mb-8 shadow-2xl hover:transition-all duration-500 hover:ease-linear ">
                            <div className="relative">
                                <img src={img} className="object-cover h-60" alt="" />
                                <p className="bg-blue-200 text-teal-900 mb-0 py-1 px-2 absolute right-0 bottom-0 capitalize">{date}</p>
                            </div>
                            <div className="py-5 px-6">
                                <div className="flex flex-wrap justify-between">
                                    <h4 className='leading-5 mb-3 text-base capitalize font-bold tracking-widest'>{title}</h4>
                                </div>
                                <p className='text-gray-600 mb-5'>{info}</p>
                                <div className="items-center flex flex-wrap justify-between text-blue-500 capitalize">
                                    <p className='mb-0'>
                                        <span className='mr-1'>
                                            <i className="fas fa-map"></i>
                                        </span>
                                        {location}
                                    </p>
                                    <p>{duration}</p>
                                    <p>{price}</p>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};
export default Tours;