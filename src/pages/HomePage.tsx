import { useEffect } from 'react';

function HomePage(): JSX.Element {

    const title = "Domů - " + document.title;

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div>
            <div>
                <h1>Ahoj!</h1>
                <div>
                    <p>
                        Jsme Studentská unie UTB.
                        Děláme ty největší a nejlepší mejdany ve Zlíně,
                        informujeme studenty o všem důležitém a
                        dlouhodobě spolupracujeme s univerzitou.
                        <a href="/">Ukaž, co se chystá</a>
                    </p>
                    <div>
                        <img />
                        <h2>Průvodce prváka</h2>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default HomePage;
