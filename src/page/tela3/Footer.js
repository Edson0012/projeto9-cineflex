export default function Footer({ catalog }) {
    return (
        <>
            {catalog !== null ? (
                <footer>
                    <div>
                        <img src={catalog.movie.posterURL} />
                    </div>
                    <h3>
                        {catalog.movie.title}
                        <br />
                        {catalog.day.weekday} - {catalog.name}
                    </h3>
                </footer>
            ) : (
                ""
            )}
        </>
    );
}
