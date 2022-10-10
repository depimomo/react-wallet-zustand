import React, { useState } from 'react';

import useColorStore, { selectAddColor } from '../store/color';

const ColorForm = () => {
    const addColor = useColorStore(selectAddColor);

    const defaultNewColor = { name: '', year: '', color: '', pantone_value: '' };

    const [newColor, setNewColor] = useState(defaultNewColor);

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setNewColor({
            ...newColor,
            [name]: value,
        });
    };

    const handleClick = async () => {
        addColor(newColor);
        setNewColor(defaultNewColor);
    }

    return (
        <div style={{ margin: '30px' }}>
            <input
                onChange={handleChange}
                value={newColor.name}
                name='name'
                placeholder='name' />
            <input
                onChange={handleChange}
                value={newColor.year}
                name='year'
                placeholder='year' />
            <input
                onChange={handleChange}
                value={newColor.color}
                name='color'
                placeholder='hex color' />
            <input
                onChange={handleChange}
                value={newColor.pantone_value}
                name='pantone_value'
                placeholder='pantone value' />
            <button onClick={handleClick}>Create color</button>
        </div>
    )
}

export default ColorForm