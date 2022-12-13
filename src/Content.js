const Content = () => {
    const handleNameChange = () => {
        const names = ['Alice', 'Bob', 'Chris', 'Dave', 'Eli', 'John', 'Mark'];
        const int = Math.floor(Math.random() * names.length);
    
        return names[int];
    }
    return (
        <main>
            <p>
                Hello {handleNameChange()}.
            </p>
        </main>
    )
}

export default Content