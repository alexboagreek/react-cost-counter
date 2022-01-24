import './CostsFilter.css';

const CostsFilter = (props) => {

    const yearChangeHandler = (event) => {
        props.onChange(event.target.value);
    };

    return (
        <div className="costs-filter">
            <div className="costs-filter__control">
                <label htmlFor="">Filter by year</label>
                <select value={ props.year } onChange={ yearChangeHandler }>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default CostsFilter;