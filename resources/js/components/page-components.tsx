import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
    className?: string;
}>

function PageComponents(props: Props) {
    return (
        <div className={props.className}>
            {/*<p>Page d'accueil</p>*/}
            {props.children}
        </div>
    );
}

export default PageComponents;
