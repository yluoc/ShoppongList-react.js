import ItemList from './ItemList'

const Content = ({ items, handlecheck, handleDelete }) => {
    
    return (
        <>
            {items.length ? (
                <ItemList
                    items = {items}
                    handlecheck={handlecheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style = {{marginTop : 'zrem'}}>your groceries list is empty.</p>
            )}    
        </>
    )
}

export default Content