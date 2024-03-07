import PageLinks from './page-links';

const Footer = () => {
    return (
        <footer className="bg-blue-500 p-20 scroll-mt-16 px-8 text-center flex justify-center flex-col items-center gap-10 text-white">
            <PageLinks />

            <p className="capitalize tracking-widest mb-5">
                copyright &copy; Backroads travel tours company
                <span id="date" className='ml-2'>{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    );
};
export default Footer;