import { leadership, managers } from '../data/Contacts';

import Article from '../components/articles/Article';
import Section from '../components/articles/section/Section';

const ContactPage = () => {
    document.title = 'Kontakty - Studentská unie UTB';

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
                            <h3>
                                {leader.degree ?
                                    leader.degree + " " + leader.name :
                                    leader.name
                                }
                            </h3>
                            <p>{leader.email}</p>
                        </div>
                    ))}
                </div>
                <Section
                    title="Manažeři projektů"
                    titleSize="2"
                    paragraph="Pokud se chcete na cokoliv zeptat nebo s námi spolupracovat, můžete nás zkontaktovat."
                />
                <div>
                    {managers.map((manager, index) => (
                        <div key={index}>
                            <img src={manager.image} alt={"Picture of " + manager.name} />
                            <h3>
                                {manager.degree ?
                                    manager.degree + " " + manager.name :
                                    manager.name
                                }
                            </h3>
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
