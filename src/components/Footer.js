import React from 'react';

// const Footer = () => {
//
//     return (
//         <footer>
//             <p>Todos los derechos reservados</p>
//         </footer>
//     );
// } REACT SABE QUE EL () SIGNIFICA RETURN

const Footer = ({fecha}) => (
    <footer>
        <p>Todos los derechos reservados &copy; {fecha}</p>
    </footer>
);

export default Footer;