function Banner({imgBaseUrl, currentTheme}){
    return (
        <div id="banner">
            { currentTheme === 'dark' && 
                <picture>
                    <source media="(min-width: 768px)" srcSet={imgBaseUrl+"bg-desktop-dark.jpg"}/>
                    <img src={imgBaseUrl+"bg-mobile-dark.jpg"} alt="Banner picture"/>
                </picture>
            }
            { currentTheme === 'light' && 
                <picture>
                    <source media="(min-width: 768px)" srcSet={imgBaseUrl+"bg-desktop-light.jpg"}/>
                    <img src={imgBaseUrl+"bg-mobile-light.jpg"} alt="Banner picture"/>
                </picture>
            }
        </div>
    )
}

export default Banner