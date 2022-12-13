import { useState } from 'react';

const Content = () => {
    const [name, setName] = useState('Rogelio');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Alice', 'Bob', 'Chris', 'Dave', 'Eli', 'John', 'Mark'];
        const int = Math.floor(Math.random() * names.length);
        setName(names[int]);
    }

    const handleClick = () => {
        setCount(count + 1);
        console.log(count);
    }

    const handleClick2 = () => {
        console.log(count);
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}.
            </p>
            <button onClick={handleNameChange}>Change name</button>
            <button onClick={handleClick}>Count click it</button>
            <button onClick={handleClick2}>Count click it</button>
        </main>
    )
}

export default Content