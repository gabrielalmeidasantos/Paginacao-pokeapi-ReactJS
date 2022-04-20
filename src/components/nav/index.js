import "./style.css";

export function Nav({ setUrl, anterior, proximo }) {
    return (
        <div className="nav">
            <div className="buttons">
                {anterior && (
                    <button onClick={() => setUrl(anterior)}>Anterior</button>
                )}
                {proximo && (
                    <button onClick={() => setUrl(proximo)}>Proximo</button>
                )}
            </div>
        </div>
    );
}
