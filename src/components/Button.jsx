import './Button.css';

export default function Button({className, children = 'shop now', href='#', ...props}){
    return(
        <a 
        className={`button ${className}`}
        href={href}
        target= "_blank"
        >
            {children}
        </a>
    );
}