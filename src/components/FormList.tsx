import { useState } from "react"

type FormListProps = {
    setItemList: (itemList: string[]) => void;
    itemList: string[]
}

const FormList = ({ setItemList, itemList }: FormListProps) => {
    const [item, setItem] = useState<string>('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setItemList([...itemList, item]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                onChange={e => setItem(e.target.value)}
            />

            <button type='submit'>ajouter</button>
        </form>
    );
}

export default FormList;