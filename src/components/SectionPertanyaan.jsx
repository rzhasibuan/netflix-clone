import CardQuestion from "./CardQuestion";

function SectionPertanyaan({title, query}) {
    return (
        <section className="tanya-jawab-umum">
            <h1>{title}</h1>

            <section className="pertanyaan">
                {
                    query.map((data =>
                        <CardQuestion key={data.id} title={data.title} content={data.body} />
                    ))
                }
            </section>
        </section>
    );
}

export default SectionPertanyaan;