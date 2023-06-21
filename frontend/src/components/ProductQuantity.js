import React, { useState } from 'react';

import { IoIosArrowUp as Up, IoIosArrowDown as Down } from 'react-icons/io';

function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);

    const increase = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        }
    };

    const decrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div>
            <Up onClick={increase} />
            <Down onClick={decrease} />
            <span>{quantity}</span>
        </div>
    );
}

export default ProductQuantity;