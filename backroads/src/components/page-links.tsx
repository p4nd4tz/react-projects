import { pageLinks } from "../data";
import PageLink from "./page-link";

const PageLinks = () => {
    return (
        <ul className="flex gap-5 text-lg capitalize font-light tracking-wider">
            {pageLinks.map(link => {
                return <PageLink key={link.id} link={link} />
            })}
        </ul>
    )
}

export default PageLinks;