// import React, { useState } from 'react';

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
// }

// const FormSubmitTable: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     phone: '',
//   });
//   const [submittedData, setSubmittedData] = useState<FormData[]>([]);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setSubmittedData([...submittedData, formData]);
//     setFormData({ name: '', email: '', phone: '' });
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="phone">Phone:</label>
//           <input
//             type="tel"
//             name="phone"
//             id="phone"
//             value={formData.phone}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       {submittedData.length > 0 && (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {submittedData.map((data, index) => (
//               <tr key={index}>
//                 <td>{data.name}</td>
//                 <td>{data.email}</td>
//                 <td>{data.phone}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </>
//   );
// };

// export default FormSubmitTable;
// //
import React from 'react';
import { useTranslation } from 'react-i18next';

const ExampleComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('Welcome to React + TypeScript + i18n')}</h1>
      <p>{t('This is an example component')}</p>
    </div>
  );
};

export default ExampleComponent;
