import LineItem from './LineItem'

const ItemList = ({ items, handlecheck, handleDelete }) => {
    return (
    
        <ul>
            {items.map((item) => (
                <LineItem
                    key = {item.id}
                    item = {item}
                    handlecheck = {handlecheck}
                    handleDelete = {handleDelete}
                />
            ))}
        </ul>    
    )
}

export default ItemList