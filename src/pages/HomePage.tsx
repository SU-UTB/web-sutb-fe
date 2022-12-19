import Template from '../components/templates/HomeTemplate';

const HomePage = () => {
    document.title = "Domů - Studentská unie UTB";

    const comingSoon: string = "https://pruvodcestudenta.utb.cz/";

    type Partner = [string, string, string];
    const partners: Partner[] =
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
