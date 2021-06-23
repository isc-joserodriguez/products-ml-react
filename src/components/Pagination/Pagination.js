import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = (props) => {
    let {
        elements,
        elementsByPage,
        page
    } = props;

    const pages = Math.ceil(elements.length / elementsByPage), items = [];

    for (let i = 0; i < pages; i++) {
        items.push(
            <Pagination.Item key={i + 1} activeLabel='' active={i + 1 === page} onClick={() => props.setPage(i + 1)}>{i + 1}</Pagination.Item>
        )

    }

    return (
        <Pagination size="md">
            <Pagination.First disabled={page === 1} onClick={() => props.setPage(1)} />
            <Pagination.Prev disabled={page === 1} onClick={() => props.setPage(page - 1)} />

            {items}

            <Pagination.Next disabled={page === pages} onClick={() => props.setPage(page + 1)} />
            <Pagination.Last disabled={page === pages} onClick={() => props.setPage(pages)} />
        </Pagination>
    )
}

export default PaginationComponent
