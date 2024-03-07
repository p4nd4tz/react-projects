import logo from '../assets/images/logo.svg';
import Container from "./container";
import PageLinks from './page-links';

const Navbar = () => {
    return (
        <nav className='fixed bg-white w-full shadow-xl'>
            <Container className="flex justify-between text-center align-middle p-5">
                <div>
                    <img src={logo} alt="backroads" />
                </div>

                <PageLinks />
            </Container>
        </nav>
    )
}


export default Navbar;