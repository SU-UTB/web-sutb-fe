import Article from "../components/articles/Article";
import Section from "../components/articles/section/Section";
import TContactTypes from "../lib/types/TContactTypes";

const ContactPage = () => {
    document.title = 'Kontakty - Studentská unie UTB';
    const leadership: TContactTypes[] = [
        {
            name: "Petra Němcová",
            degree: "Bc.",
            position: "HR",
            email: "nemcova@sutb.cz",
            image: "./assets/images/managers/pet_nem.jpg"
        },
    ];
    const managers: TContactTypes[] = [
        {
            name: "Petra Němcová",
            degree: "Bc.",
            project: "Reprezentační ples UTB 2023",
            email: "nemcova@sutb.cz",
            image: "./assets/images/managers/pet_nem.jpg"
        },
    ];
    return (
        <>
            <Article margin>
                <Section
                    title="Vedení"
                    titleSize="3"
                />
                <div>
                    {leadership.map((leader, index) => (
                        <div key={index}>
                            <img src={leader.image} alt={"Picture of " + leader.name} />
                            <h2>{leader.position}</h2>
                            <h3>{leader.degree + " " + leader.name}</h3>
                            <p>{leader.email}</p>
                        </div>
                    ))}
                </div>
                <Section
                    title="Manažeři projektů"
                    titleSize="2"
                />
                <div>
                    {managers.map((manager, index) => (
                        <div key={index}>
                            <img src={manager.image} alt={"Picture of " + manager.name} />
                            <h3>{manager.degree + " " + manager.name}</h3>
                            <p>{manager.project}</p>
                            <p>{manager.email}</p>
                        </div>
                    ))}
                </div>
            </Article>
        </>
    );
}

export default ContactPage;
