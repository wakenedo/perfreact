import { memo } from 'react';


interface ProductItemProps {
    product: {
        id: number,
        price: number,
        priceFormatted: string,
        title: string,
    }
    onAddToWishList: (id: number) => void
}

function ProductItemComponent({ product, onAddToWishList } : ProductItemProps) {
    return (
        <div>
            
            {product}.title - <strong>{product.priceFormatted}</strong>
            <button onClick={() => onAddToWishList(product.id)}>Add to Wish List</button>
            
        </div>
    )
}

/**
 * Using Memo in React App
 * 1. Pure Functional Components
 * 2. Renders too often
 * 3. Re-renders with same props
 * 4. Medium to Big size (components)
 */

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
})