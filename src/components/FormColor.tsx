import { useState } from "react"

type FormColorProps = {
    setPrimaryColor: (color: string) => void
}

const FormColor = ({ setPrimaryColor }: FormColorProps) => {
    const [color, setColor] = useState<string>('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setPrimaryColor(color)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input 
            name='color' 
            type="color"
            onChange={e => setColor(e.target.value)}
            />

            <button type='submit'>modifier</button>
        </form>
    );
}

export default FormColor;