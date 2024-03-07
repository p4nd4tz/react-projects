type Link = {
    link: {
        id: number,
        href: string,
        text: string,
    };
}

const PageLink = ({ link }: Link) => {
    return (
        <li className="hover:text-blue-500">
            <a href={link.href}>
                {link.text}
            </a>
        </li>
    )
}

export default PageLink;