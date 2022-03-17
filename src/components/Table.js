import React, { useState, useEffect} from 'react'

require("es6-promise").polyfill();
require("isomorphic-fetch");

function Table () {
    const [data, setData] = useState([]);
    // const [q, setQ] = useState("");

    useEffect(() => {
        fetch("https://devmentor.live/api/examples/contacts?api_key=b7c58b")
        .then((respons)=> respons.json())
        .then((json) => setData(json));
    }, []);

    const columns = data[0] && Object.keys(data[0]);
    
    const styleObj = {
        cellPadding: '0',       
        cellSpacing: "0",
    }


    return <div>
        filter goes ere
    
    
    
    <table style= {styleObj}>
        <thead>
            <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)} </tr>
        </thead>
        
        
        <tbody>
            {data.map(row => <tr>
                {
                    columns.map(column => <td> {row[column]}  </td>
                    )}
            </tr>
            )}

        </tbody>
    </table>
    );
 </div>
}

export default Table  