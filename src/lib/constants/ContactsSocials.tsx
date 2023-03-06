import { SiFacebook, SiInstagram } from 'react-icons/si';

import TImageLink from '../types/TImageLinkTypes';

export const SOCIALS_LINKS = {
    FACEBOOK: {
        name: "Facebook",
        shortName: "Fb",
        linkTo: "https://www.facebook.com/studentskaunieutb",
        imgIcon: <SiFacebook />
    },
    INSTAGRAM: {
        name: "Instagram",
        shortName: "Ig",
        linkTo: "https://www.instagram.com/studentskaunieutb/",
        imgIcon: <SiInstagram />,
    },
};

export const CONTACTS_LINKS = {
    EMAIL: {
        text: "su@sutb.cz",
        linkTo: "mailto:su@sutb.cz"
    },
    PHONE: {
        text: "605 803 354",
        linkTo: "tel:+420 605 803 354"
    }
};

export const SU_SOC: TImageLink[] = [
    {
        text: SOCIALS_LINKS.FACEBOOK.shortName,
        linkTo: SOCIALS_LINKS.FACEBOOK.linkTo,
        imgIcon: SOCIALS_LINKS.FACEBOOK.imgIcon

    },
    {
        text: SOCIALS_LINKS.INSTAGRAM.shortName,
        linkTo: SOCIALS_LINKS.INSTAGRAM.linkTo,
        imgIcon: SOCIALS_LINKS.INSTAGRAM.imgIcon
    }
];

export const SU_CONTACTS: TImageLink[] = [
    {
        text: CONTACTS_LINKS.EMAIL.text,
        linkTo: CONTACTS_LINKS.EMAIL.linkTo
    },
    {
        text: CONTACTS_LINKS.PHONE.text,
        linkTo: CONTACTS_LINKS.PHONE.linkTo
    }
];

export const SU_ADDRESS = {
    fullName: "Studentská unie UTB, z.s.",
    street: "Růmy 4046, budova U3 UTB",
    city: "Zlín",
    zip: "760 01",
    ico: "26996286"
}