import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = (props) => {
    let {
        elements,
        elementsByPage,
        page
    } = props;

    const pages = Math.ceil(elements.length / elementsByPage)
    let items = [];

    for (let i = 0; i < pages; i++) {
        items.push(
            <Pagination.Item key={i + 1} active={i + 1 === page} onClick={() => { window.scrollTo(0, 0); props.setPage(i + 1); }}>{i + 1}</Pagination.Item>
        )
    }

    if (pages > 6) {
        items = items.splice(
            page < 4 ?
                0 :
                pages < page + 3 ?
                    pages - 6 :
                    page - 3
            , 6);
    }


    return (
        <Pagination size='md'>
            <Pagination.First disabled={page === 1} onClick={() => { window.scrollTo(0, 0); props.setPage(1); }} />
            <Pagination.Prev disabled={page === 1} onClick={() => { window.scrollTo(0, 0); props.setPage(page - 1); }} />

            {items}

            <Pagination.Next disabled={page === pages} onClick={() => { window.scrollTo(0, 0); props.setPage(page + 1); }} />
            <Pagination.Last disabled={page === pages} onClick={() => { window.scrollTo(0, 0); props.setPage(pages); }} />
        </Pagination>
    )
}

export default PaginationComponent
