import Template from '../components/templates/HomeTemplate';

const HomePage = () => {
    document.title = "Domů - Studentská unie UTB";
    const comingSoon: string = "https://pruvodcestudenta.utb.cz/";
    type Partner = {
        src: string;
        alt: string;
        href: string;
    };
    const partners: Partner[] = [
        {
            src: "./assets/images/utb.svg",
            alt: "Univerzita Tomáše Bati",
            href: "https://www.utb.cz/",
        },
        {
            src: "./assets/images/kmz-cs.svg",
            alt: "Koleje a Menza",
            href: "https://kmz.utb.cz/",
        },
    ];
    return (
        <Template
            comingSoon={comingSoon}
            partners={partners}
        />
    );
}

export default HomePage;
