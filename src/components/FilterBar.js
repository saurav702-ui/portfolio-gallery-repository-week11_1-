function FilterBar({ activeFilter, setActiveFilter }) {

    const filters = ["All", "React", "Node", "CSS"];

    return (
        <div className="filter-bar">

            {filters.map((filter) => (

                <button
                    key={filter}
                    className={
                        activeFilter === filter
                            ? "filter-button active"
                            : "filter-button"
                    }
                    onClick={() => setActiveFilter(filter)}
                >
                    {filter}
                </button>

            ))}

        </div>
    );
}

export default FilterBar;