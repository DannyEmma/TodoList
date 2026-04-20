
function Title({iconBaseUrl, currentTheme, changeTheme}){
    const handleClick = () => currentTheme === 'dark' ? changeTheme('light') : changeTheme('dark')

    return (
        <div id="title-container">
            <h1>TODO</h1>
            <img onClick={handleClick} src={iconBaseUrl+(currentTheme === 'dark' ? "icon-sun.svg" : "icon-moon.svg")} alt="Sun Icon"/>
        </div>
    )
    
}

export default Title