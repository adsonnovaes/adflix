import React from 'react';

function ButtonLink (props) {
    // props => { className: "Objeto passado", href: da mesma forma}

    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;