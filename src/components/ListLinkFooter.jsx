import React from 'react';

function ListLinkFooter({query, category}) {
    return (
        <ul>
            {
                query.map((list =>
                        <li key={list.id}><a href={list.link}>{list.title}</a></li>
                ))
            }
        </ul>
    );
}

export default ListLinkFooter;