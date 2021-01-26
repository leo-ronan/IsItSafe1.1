import React, { useEffect, useState } from 'react'

const Search = () => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([])

    const [val, setVal] = useState({
        fyDeclared: "",
        state: "",
        title: ""
    })

    useEffect(() => {
        fetch("https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries")
            .then(res => res.json())
            .then(res => setData(res.DisasterDeclarationsSummaries))
            .catch(err => console.log(err))
    }, [])

    console.log(data)

    const handleChange = e => {
       setVal({...val, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
       const filterr = data.filter(item => item.state == val.state && item.title == val.title && item.fyDeclared ==val.fyDeclared )
        setFilteredData(filterr)
       console.log(val);
    }

    return (
        <div className="homeParent">
            <form className="homeForm" onSubmit={handleSubmit}>
                <input type="text" placeholder="enter state" name="state" onChange={handleChange} />
                <select onChange={handleChange}>
                    <option value="title">Title</option>
                    <option value="FLOOD">Flood</option>
                    <option value="TORNADO">Tornado</option>
                    <option value="HURRICANE">Hurricane</option>
                    <option value="HEAVY RAINS & FLOODING"> HEAVY RAINS & FLOODING</option>
                </select>
    
                <input type="text" placeholder="enter year declared" name="fyDeclared" onChange={handleChange} />
                <input type="submit" value="submit" />
   
</form>

            <div className="filteredDisasters">
                <h3>Filtered Disasters</h3>
                {
                    filteredData ? filteredData.map(data => (
                        <p>{data.title}</p>
                    ))
                        : ""
                }
            </div>

        </div>
    )
}

export default Search
