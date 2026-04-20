function Theme({theme}){
    const darkColors = {
        body: 'hsl(235, 21%, 11%)',
        backgroundRowCheckbox: 'hsl(235, 24%, 19%)',
        borderRowCheckbox: 'hsl(237, 14%, 26%)',
        taskName: 'hsl(234, 39%, 85%)',
        backgroundCheckbox: 'hsl(235, 24%, 19%)',
        borderCheckbox: 'hsl(237, 14%, 26%)',
        checkboxHover: 'hsl(235, 24%, 19%)',
        textSearchBar: 'hsl(234, 39%, 85%)',
        completedTask: 'hsl(233, 14%, 35%)',
        backgroundFilterBar: 'hsl(235, 24%, 19%)',
        colorFilterBar: 'hsl(233, 14%, 35%)',
        hoverFilterBarLink: 'hsl(236, 33%, 92%)',
        dragInstruction: 'hsl(233, 14%, 35%)'
    }
    const lightColors = {
        body: 'hsl(0, 0%, 98%)',
        backgroundRowCheckbox: 'hsl(0, 0%, 98%)',
        borderRowCheckbox: 'hsl(233, 11%, 84%)',
        taskName: 'black',
        backgroundCheckbox: 'hsl(0, 0%, 98%)',
        borderCheckbox: 'hsl(233, 11%, 84%)',
        checkboxHover: 'hsl(0, 0%, 98%)',
        textSearchBar: 'black',
        completedTask: 'hsl(233, 11%, 84%)',
        backgroundFilterBar: 'hsl(0, 0%, 98%)',
        colorFilterBar: 'hsl(236, 9%, 61%)',
        hoverFilterBarLink: 'hsl(235, 19%, 35%)',
        dragInstruction: 'hsl(236, 9%, 61%)'
    }

    const colors = theme === 'dark' ? darkColors : lightColors


    return (
        <style>
            {
                `
                    body{
                        background-color: ${colors.body};
                    }
                    .row-checkbox{
                        background: ${colors.backgroundRowCheckbox};
                        border-color: ${colors.borderRowCheckbox};
                    }
                    #todo-list li > label {
                        color: ${colors.taskName};
                    }
                    .checkbox {
                        background: ${colors.backgroundCheckbox};
                        border-color: ${colors.borderCheckbox};
                    }
                    label.checkbox:not(.checked-task):hover {
                        background: linear-gradient(${colors.checkboxHover} 0 0) padding-box, linear-gradient(145deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box
                    }
                    #search-bar input[type='text'] {
                        color: ${colors.textSearchBar};
                    }
                    .completed-task {
                        color: ${colors.completedTask};
                    }
                    #filter-bar{
                        background: ${colors.backgroundFilterBar};
                    }
                    #filters, #remaining-tasks button, #clear-completed-tasks button{
                        color: ${colors.colorFilterBar};
                    }
                    #filter-bar li:hover, #remaining-tasks button:hover, #clear-completed-tasks button:hover{
                        color: ${colors.hoverFilterBarLink};
                    }
                    #mobile-filter-bar{
                        background: ${colors.backgroundFilterBar}
                    }
                    #drag-instruction{
                        color: ${colors.dragInstruction};
                    }
                    
                `
            }
            
            
        </style>
    )
    
}

export default Theme