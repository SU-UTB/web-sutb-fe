import AboutUs from '../../sections/aboutPage/AboutUs';
import Downloads from '../../sections/aboutPage/Downloads';
import Join from '../../sections/aboutPage/Join';
import Leaders from '../../sections/contacts/Leaders';
import Rules from '../../sections/aboutPage/Rules';
import TDownloadTypes from '../types/TDownloadTypes';
import TSectionTypes from '../types/TSectionTypes';

export const SECTIONS: TSectionTypes[] = [
    {
        name: "O organizaci",
        id: "about-us",
        content: <AboutUs />
    },
    {
        name: "Vedení",
        id: "leaders",
        content: <Leaders />
    },
    {
        name: "Přidej se",
        id: "join-us",
        content: <Join />
    },
    {
        name: "Stanovy",
        id: "rules",
        content: <Rules />
    },
    {
        name: "Ke stažení",
        id: "download",
        content: <Downloads />
    }
];

export const DOWNLOADS: TDownloadTypes[] = [
    {
        title: "Press kit",
        name: "Loga a tiskové materiály (PDF, PNG)",
        linkTo: "https://www.dropbox.com/sh/51qauayq1k7igq6/AAAznMWvYwv5wxA6ZAW79DGra?dl=0"
    },
    {
        title: "Fotogalerie",
        name: "Archiv fotografií",
        linkTo: "https://www.facebook.com/studentskaunieutb/photos"
    },
    {
        title: "Stanovy",
        name: "Stanovy SU UTB(PDF)",
        linkTo: "/assets/stanovy-SU-UTB.pdf"
    },
    {
        title: "Ochrana osobních údajů",
        name: "Zásady zpracování osobních údajů",
        linkTo: "/assets/souhlas-se-spracovanim-os-udaju.pdf"
    }
]