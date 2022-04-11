export interface AddProductToWishListProps {
    onAddToWishList: () => void
    onRequestClose: () => void
}

export function AddProductToWishList({
    onAddToWishList,
    onRequestClose
}: AddProductToWishListProps) {
    return (
        <span>
            Do you wish to add this product to favorites?
            <button onClick={onAddToWishList}>Yes</button>
            <button onClick={onRequestClose}>No</button>
        </span>
    )
}