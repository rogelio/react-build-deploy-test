const Content = () => {
    const handleNameChange = () => {
        const names = ['Alice', 'Bob', 'Chris', 'Dave', 'Eli', 'John', 'Mark'];
        const int = Math.floor(Math.random() * names.length);
    
        return names[int];
    }

    const handleClick = () => {
        console.log('You clicked it');
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked.`);
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}.
            </p>
            <button onClick={handleClick}>Click it</button>
            <button onClick={() => handleClick2(handleNameChange())}>Name click it</button>
            <button onClick={(e) => handleClick3(e)}>Event click it</button>
        </main>
    )
}

export default Content