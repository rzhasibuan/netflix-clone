import React, {useState} from 'react';

function CardQuestion({title, content}) {
    const [selectQuest, setSelectQuest] = useState(false);

    return (
        <div className="card-pertanyaan">
            <div className="card-header">
                <h2>{title}</h2>
                <div className="icon">
                    <button onClick={() => setSelectQuest(!selectQuest)}>
                        {
                            selectQuest ? <span className="material-symbols-outlined">close</span> : <span className="material-symbols-outlined">add</span>
                        }
                    </button>
                </div>
            </div>
            <div className="card-body" style={{display : `${selectQuest ? 'block' : 'none'}`}}>
                {content}
            </div>
        </div>
    );
}

export default CardQuestion;