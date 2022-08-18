interface Props {
    to: string;
    onClick: () => void;
    text: string;
}

const MobileLink = ({to, onClick, text}: Props) => {
    return (
        <a href={to} onClick={onClick}>
            {text}
        </a>
    )
}

export default MobileLink
