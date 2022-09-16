import React from 'react';
import ButtonSubscribe from "./ButtonSubscribe";

function SectionEmailSubscraibe({title}) {
    return (
        <section className="email-subscribe">
            <div className="info">
                <p>{title}</p>
            </div>
            <ButtonSubscribe name="Mulai" label="Alamat Email" />
        </section>
    );
}

export default SectionEmailSubscraibe;