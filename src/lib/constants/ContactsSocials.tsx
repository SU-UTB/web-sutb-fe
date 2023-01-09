import TImageLink from "../types/TImageLinkTypes";

export const SOCIALS_LINKS = {
    FACEBOOK: {
        name: "Facebook",
        shortName: "Fb",
        linkTo: "https://www.facebook.com/studentskaunieutb",
        imgSrc: "",
        imgAlt: "Studentská Unie facebook",
    },
    INSTAGRAM: {
        name: "Instagram",
        shortName: "Ig",
        linkTo: "https://www.instagram.com/studentskaunieutb/",
        imgSrc: "",
        imgAlt: "Studentská Unie instagram"
    },
};

export const CONTACTS_LINKS = {
    EMAIL: {
        text: "su@sutb.cz",
        linkTo: "mailto:su@sutb.cz"
    },
    PHONE: {
        text: "773 392 020",
        linkTo: "tel:+420 773 392 020"
    }
};

export const SU_SOC: TImageLink[] = [
    {
        text: SOCIALS_LINKS.FACEBOOK.shortName,
        linkTo: SOCIALS_LINKS.FACEBOOK.linkTo
    },
    {
        text: SOCIALS_LINKS.INSTAGRAM.shortName,
        linkTo: SOCIALS_LINKS.INSTAGRAM.linkTo
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
    ico: "26996286",
}