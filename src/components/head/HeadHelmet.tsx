import { Helmet } from 'react-helmet';
import IHeadHelmetProps from '../../lib/interfaces/IHeadHelmetProps';

export default function HeadHelmet({ title }: IHeadHelmetProps) {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>{title} – Studentská unie UTB</title>
            <meta name="description" content="Studentská unie UTB je nezisková organizace obohacující život studentů ve Zlíně" />
            <meta property="og:locale" content="cs_CZ" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title + " - Studentská unie UTB"} />
            <meta property="og:description" content="Ahoj! Jsme Studentská unie UTB. Děláme ty největší a nejlepší mejdany ve Zlíně, informujeme studenty o všem důležitém a dlouhodobě spolupracujeme s univerzitou. Podívejte se na pořádané akce, nebo dlouhodobé projekty!" />
            <meta property="og:url" content="https://sutb.cz/" />
            <meta property="og:image" content="" />
            <meta property="og:site_name" content="Studentská unie UTB" />
            <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        </Helmet>
    )
};