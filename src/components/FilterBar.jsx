import { useState } from 'react'

function FilterBar({filter, updateFilter, remainingTasks, deleteCompletedTasks, isMobile}){       
    const handleClickFilter = (e) => {
        const currentFilter = e.target.getAttribute('data-filter')
        updateFilter(currentFilter)
    }

    return (
        <>
            <div id="filter-bar">
                <div id="remaining-tasks">
                    <button>{remainingTasks} left</button>
                </div>

                {!isMobile && 
                    <div id="filters">
                        <nav>
                            <ul>
                                <li onClick={handleClickFilter} data-filter='all' className={filter === 'all' ? 'active' : ''}>All</li>
                                <li onClick={handleClickFilter} data-filter='active' className={filter === 'active' ? 'active' : ''}>Active</li>
                                <li onClick={handleClickFilter} data-filter='completed' className={filter === 'completed' ? 'active' : ''}>Completed</li>
                            </ul>
                        </nav>
                    </div>
                }
                
                <div id="clear-completed-tasks">
                    <button onClick={() => deleteCompletedTasks()}>Clear Completed</button>
                </div>
            </div>

            {isMobile && 
                <div id="mobile-filter-bar">
                    <div id="filters">
                        <nav>
                            <ul>
                                <li onClick={handleClickFilter} data-filter='all' className={filter === 'all' ? 'active' : ''}>All</li>
                                <li onClick={handleClickFilter} data-filter='active' className={filter === 'active' ? 'active' : ''}>Active</li>
                                <li onClick={handleClickFilter} data-filter='completed' className={filter === 'completed' ? 'active' : ''}>Completed</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            }
        </>
    )




        
    
}

export default FilterBar