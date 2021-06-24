import React from 'react'

import Form from 'react-bootstrap/Form'

const Filter = (props) => {

    const changeHandler = (e) => props.orderHandler(e.target.value);

    const newChangeHandler = (e) => {
        props.statusHandler(
            e.target.checked ? 1 : 0
        )
    }
    const usedChangeHandler = (e) => {
        props.statusHandler(
            e.target.checked ? 2 : 0
        )

    }

    return (
        <div className='d-flex justify-content-end align-items-center'>
            <div className="mr-auto">
                {props.number} Articulos
            </div>
            <div >
                Ordenar por:
            </div>
            <div className='mr-3'>
                <Form.Group className='my-auto'>
                    <Form.Control as='select' onChange={changeHandler}>
                        <option value='1'>Más relevantes</option>
                        <option value='2'>Menor precio</option>
                        <option value='3'>Mayor precio</option>
                    </Form.Control>
                </Form.Group>

            </div>
            <div className='mb-3 my-auto'>
                <Form.Check
                    type='checkbox'
                    label='Nuevo'
                    onChange={newChangeHandler}
                    disabled={props.status == 2}
                    checked={props.status == 1}
                />
                <Form.Check
                    type='checkbox'
                    label='Usado'
                    onChange={usedChangeHandler}
                    disabled={props.status == 1}
                    checked={props.status == 2}
                />
            </div>
        </div>
    )
}

export default Filter
