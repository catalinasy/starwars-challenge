import React from "react"

export const Button = props => {
    const {
        onClick,
        className,
        style,
        label,
    } = props;

    return (
        <button className = {className} style={style} onClick={onClick}>
        {label}
        </button>
    );
};