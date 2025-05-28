import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from './DocButton.styles';
export const DocButton = ({ href, children }) => {
    const handleClick = () => {
        window.open(href, '_blank', 'noopener,noreferrer');
    };
    return (_jsx(Button, { onClick: handleClick, type: "button", children: children }));
};
