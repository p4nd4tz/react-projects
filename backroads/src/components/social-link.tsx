type SocialLinkProps = {
    href: string,
    icon: string,
}

const SocialLink = ({ href, icon }: SocialLinkProps) => {
    return (
        <li>
            <a
                href={href}
                target="_blank"
                // eslint-disable-next-line
                rel="noreferrer"
            >
                <i className={icon}></i>
            </a>
        </li>
    );
};
export default SocialLink;