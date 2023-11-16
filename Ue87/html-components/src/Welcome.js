import React from 'react';

const Welcome = () => {
  return (
    <section>
      <h2>Willkommen</h2>
      <p>Herzlich willkommen auf meiner einfachen Webseite!</p>
    </section>
  );
};

export default Welcome;




const AboutMe = () => {
    return (
      <section>
        <h2>Über mich</h2>
        <p>
          Hier ist eine kurze Beschreibung über mich und meine Interessen.
        </p>
      </section>
    );
  };
  
  export default AboutMe;




  const Contact = () => {
    return (
      <section>
        <h2>Kontakt</h2>
        <p>
          Bei Fragen oder Anregungen können Sie mich gerne kontaktieren:
          kontakt@meinewebseite.de
        </p>
      </section>
    );
  };
  
  export default Contact;