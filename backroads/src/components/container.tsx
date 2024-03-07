import { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
    className?: string,
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={`w-11/12 m-auto ${className}`}>
            {children}
        </div>
    )
}

export default Container;