import Template from '../components/templates/HomeTemplate';

function HomePage(): JSX.Element {

    document.title = "Domů - Studentská unie UTB";

    const comingSoon = "https://pruvodcestudenta.utb.cz/";

    const partners: string[][] =
        [
            ["./assets/utb.svg", "Univerzita Tomáše Bati", "https://www.utb.cz/"],
            ["./assets/kmz-cs.svg", "Koleje a Menza", "https://kmz.utb.cz/"],
        ]
    return (
        <Template
            comingSoon={comingSoon}
            partners={partners}
        />
    );
}

export default HomePage;
