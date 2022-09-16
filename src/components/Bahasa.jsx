import React from 'react';

function Bahasa({data}) {
    return (
        <div className="bahasa">
            <select name="bahasa" id="">
                {
                    data.map((data =>
                        <option key={data.id} value={data.id}>{data.value}</option>
                    ))
                }
            </select>
        </div>
    );
}

export default Bahasa;