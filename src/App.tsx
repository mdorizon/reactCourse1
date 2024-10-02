import { useState } from 'react'
import ListItem from './components/ListItem'
import FormColor from './components/FormColor'
import FormList from './components/FormList'

const itemListDataDefault = ["Item 1", "item2", "item3"]
const numberOfItems = 4
const primaryColorDefault = "blue"

function App() {
  const [primaryColor, setPrimaryColor] = useState<string>(primaryColorDefault)
  const [itemList, setItemList] = useState<string[]>(itemListDataDefault)

  return (
    <>
      <h1>Component App</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur itaque consequatur id maiores iste totam excepturi assumenda doloremque officia, qui nulla nesciunt dolorum suscipit, vel, harum optio commodi eius impedit.</p>
      
      <FormColor setPrimaryColor={setPrimaryColor} />
      <FormList setItemList={setItemList} itemList={itemList} />

      <ListItem
        numberOfItems={numberOfItems}
        primaryColor={primaryColor}
        itemListData={itemList}
        setItemList={setItemList}
      />
    </>
  )
}

export default App
