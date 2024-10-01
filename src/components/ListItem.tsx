type ListItemProps = {
    numberOfItems: number,
    primaryColor: string,
    itemListData: string[]
}

function ListItem({ numberOfItems, primaryColor, itemListData }: ListItemProps) {
    return (
        <div style={{color: primaryColor}}>
            <h1>ListItem component</h1>
            <p>
                Nombre d'items : {numberOfItems}
            </p>

            <ul>
                {itemListData.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
}

export default ListItem