type TitleProps = {
    title: string;
    subtitle: string;
};

const Title = ({ title, subtitle }: TitleProps) => {
    return (
        <div className="text-4xl text-gray-800 font-bold tracking-widest uppercase flex justify-center mb-16 text-center">
            <h2>
                {title} <span className="pl-3 text-blue-500">{subtitle}</span>
            </h2>
        </div>
    );
};

export default Title;
