import Title from "./title"
import { services } from '../data';

const Services = () => {
    return (
        <section className="bg-slate-200 p-16">
            <Title title="our" subtitle="services" />
            <div className="flex gap-5 justify-center">
                {services.map((service) => {
                    const { id, icon, title, text } = service;
                    return (
                        <article key={id} className="text-left">
                            <span className="">
                                <i className={icon}></i>
                            </span>
                            <div className="pl-4 text-base">
                                <h4 className="font-bold capitalize tracking-widest mb-2 leading-4">{title}</h4>
                                <p className="max-w-80 mb-5 text-gray-500">{text}</p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    )
}

export default Services