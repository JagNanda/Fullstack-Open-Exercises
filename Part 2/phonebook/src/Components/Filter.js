import React from "react"

const Filter = (props) => {

    return (

        <div>
            Filter: <input value={props.search} onChange={props.onChange} />
        </div>
    )

}

export default Filter;