// import { useEffect, useState } from 'react';
// import { AiFillInstagram } from 'react-icons/ai';
// import { MdEmail } from 'react-icons/md';
// import { BsBatteryFull } from 'react-icons/bs';
// import Wrapper from './NavBar_styles';

// const NavBar = () => {
//   const [time, setTime] = useState('');

//   const getTime = () => {
//     const dateNow = new Date();
//     const hour =
//       dateNow.getHours() < 10 ? `0${dateNow.getHours()}` : dateNow.getHours();
//     const minute =
//       dateNow.getMinutes() < 10
//         ? `0${dateNow.getMinutes()}`
//         : dateNow.getMinutes();

//     const day = dateNow.toString().split(' ')[0];

//     setTime(`${day} ${hour}:${minute}`);
//   };

//   useEffect(() => {
//     getTime();
//     const interval = setInterval(getTime, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Wrapper>
//       <ul>
//         <li className="brand">
//           <a href="#">Yaël Kempf</a>
//         </li>
//         <li>
//           <p>File</p>
//           <div className="menu">
//             <ul>
//               <li>
//                 <a href="#">About</a>
//               </li>
//               <li>
//                 <a href="#">Projects</a>
//               </li>
//               <li>
//                 <a href="#">Photos</a>
//               </li>
//             </ul>
//           </div>
//         </li>
//         <li>
//           <p>Contact</p>
//           <div className="menu">
//             <ul>
//               <li>
//                 <a href="#">Email</a>
//               </li>
//               <li>
//                 <a href="#">Instagram</a>
//               </li>
//             </ul>
//           </div>
//         </li>
//         <li>
//           <p>Settings</p>
//         </li>
//       </ul>

//       <ul>
//         <li>
//           <a href="#">hello@yaelkempf.com</a>
//         </li>
//         <li className="icon-container">
//           <a href="#">
//             <AiFillInstagram />
//           </a>
//         </li>
//         <li className="icon-container">
//           <a href="#">
//             <MdEmail />
//           </a>
//         </li>
//         <li className="icon-container">
//           <BsBatteryFull className="battery" />
//         </li>
//         <li className="time-container">
//           <p>{time}</p>
//         </li>
//       </ul>
//     </Wrapper>
//   );
// };

// export default NavBar;
