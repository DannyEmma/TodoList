import { useState } from "react"

function FilterBar({ filter, updateFilter, remainingTasks, deleteCompletedTasks, isMobile }) {
  const handleClickFilter = (e) => {
    const currentFilter = e.target.getAttribute("data-filter")
    updateFilter(currentFilter)
  }

  return (
    <>
      <div id="filter-bar">
        <div id="remaining-tasks">
          <button>
            {remainingTasks} {remainingTasks > 1 ? "restants" : "restant"}
          </button>
        </div>

        {!isMobile && (
          <div id="filters">
            <nav>
              <ul>
                <li onClick={handleClickFilter} data-filter="all" className={filter === "all" ? "active" : ""}>
                  Toutes
                </li>
                <li onClick={handleClickFilter} data-filter="active" className={filter === "active" ? "active" : ""}>
                  En cours
                </li>
                <li onClick={handleClickFilter} data-filter="completed" className={filter === "completed" ? "active" : ""}>
                  Terminées
                </li>
              </ul>
            </nav>
          </div>
        )}

        <div id="clear-completed-tasks">
          <button onClick={() => deleteCompletedTasks()}>Supprimer terminées</button>
        </div>
      </div>

      {isMobile && (
        <div id="mobile-filter-bar">
          <div id="filters">
            <nav>
              <ul>
                <li onClick={handleClickFilter} data-filter="all" className={filter === "all" ? "active" : ""}>
                  Toutes
                </li>
                <li onClick={handleClickFilter} data-filter="active" className={filter === "active" ? "active" : ""}>
                  En cours
                </li>
                <li onClick={handleClickFilter} data-filter="completed" className={filter === "completed" ? "active" : ""}>
                  Terminées
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default FilterBar
