type ListItemProps = {
    numberOfItems: number,
    primaryColor: string,
    itemListData: string[],
    setItemList: (itemListData: string[]) => void
}

function ListItem({ numberOfItems, primaryColor, itemListData, setItemList }: ListItemProps) {

    const handleClick = (e: React.MouseEvent, index: number) => {
        setItemList(itemListData.filter((item, i) => i !== index))
    }

    return (
        <div style={{color: primaryColor}}>
            <h1>ListItem component</h1>
            <p>
                Nombre d'items : {numberOfItems}
            </p>

            <ul>
                {itemListData.map((item, index) => (
                    <li key={index} style={{display: "flex"}}>
                        <p>
                            {item}
                        </p>
                        <button onClick={e => handleClick(e, index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListItem