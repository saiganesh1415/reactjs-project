// // import { useFormik } from 'formik';
// // import React from 'react';
// // import validationSchema from '../../Components/Contact/Validation';

// // function Contact() {
// //   const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
// //     useFormik({
// //       initialValues: {
// //         name: '',
// //         email: '',
// //         subject: '',
// //         message: '',
// //       },
// //       onSubmit: (values) => {
// //         console.log(values);
// //       },
// //       validationSchema,
// //     });

// //   return (
// //     <div className="contact-page">
// //       <div className="left-side">
// //         <h1>Let's get in touch</h1>
// //         <p className="opening">
// //           We're open for any suggestion or just to have a chat.
// //         </p>
// //         <div className="contact-items">
// //           <div className="contact-item">
// //             <i className="fa-solid fa-map-pin"></i>
// //             <p>
// //               <strong>Adress:</strong> 1st Floor,Gandhi Nagar,Dharmavaram,515671.
// //             </p>
// //           </div>
// //           <div className="contact-item">
// //             <i className="fa-solid fa-phone"></i>
// //             <p>
// //               <strong>Phone:</strong> +91 9440781599
// //             </p>
// //           </div>
// //           <div className="contact-item">
// //             <i className="fa-solid fa-paper-plane"></i>
// //             <p>
// //               <strong>Email:</strong> Ramustudiodmm@gmail.com
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //       <form onSubmit={handleSubmit}>
// //         <h1>Get in touch</h1>
// //         <p>
// //           Choose the most convenient method and we’ll get back to you as soon as
// //           we can.
// //         </p>
// //         <div className="input">
// //           <label>Name:</label>
// //           <input
// //             name="name"
// //             type="name"
// //             onChange={handleChange}
// //             value={values.name}
// //             onBlur={handleBlur}
// //             placeholder="Name"
// //           />

// //           {errors.name && touched.name && (
// //             <div className="error">{errors.name}</div>
// //           )}
// //         </div>
// //         <div className="input">
// //           <label>Email:</label>
// //           <input
// //             name="email"
// //             type="email"
// //             onChange={handleChange}
// //             value={values.email}
// //             onBlur={handleBlur}
// //             placeholder="Email"
// //           />

// //           {errors.email && touched.email && (
// //             <div className="error">{errors.email}</div>
// //           )}
// //         </div>
// //         <div className="input">
// //           <label>Subject:</label>
// //           <input
// //             name="subject"
// //             onChange={handleChange}
// //             value={values.subject}
// //             onBlur={handleBlur}
// //             placeholder="Subject"
// //           />

// //           {errors.subject && touched.subject && (
// //             <div className="error">{errors.subject}</div>
// //           )}
// //         </div>

// //         <div className="input-textarea">
// //           <label>Your Message:</label>
// //           <textarea
// //             name="message"
// //             onChange={handleChange}
// //             value={values.message}
// //             onBlur={handleBlur}
// //             placeholder="Message"
// //             maxLength="101"
// //           />
// //           {errors.message && touched.message && (
// //             <div className="error">{errors.message}</div>
// //           )}
// //         </div>

// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Contact;

// import { useFormik } from 'formik';
// import React from 'react';
// import validationSchema from '../../Components/Contact/Validation';

// function Contact() {
//   const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
//     useFormik({
//       initialValues: {
//         name: '',
//         email: '',
//         subject: '',
//         message: '',
//       },
//       onSubmit: async (values) => {
//         const response = await fetch('http://localhost/php/contact.php', { // Update the URL to your PHP script path
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(values),
//         });

//         const data = await response.json();

//         if (!data.success) {
//           // If there are errors, set the errors in formik
//           console.log(data.errors);
//           Object.keys(data.errors).forEach((key) => {
//             errors[key] = data.errors[key];
//           });
//         } else {
//           // Handle successful submission
//           console.log(data.message);
//           // Optionally reset form or show success message
//         }
//       },
//       validationSchema,
//     });

//   return (
//     <div className="contact-page">
//       <div className="left-side">
//         <h1>Let's get in touch</h1>
//         <p className="opening">
//           We're open for any suggestion or just to have a chat.
//         </p>
//         <div className="contact-items">
//           <div className="contact-item">
//             <i className="fa-solid fa-map-pin"></i>
//             <p>
//               <strong>Address:</strong> 1st Floor, Gandhi Nagar, Dharmavaram, 515671.
//             </p>
//           </div>
//           <div className="contact-item">
//             <i className="fa-solid fa-phone"></i>
//             <p>
//               <strong>Phone:</strong> +91 9440781599
//             </p>
//           </div>
//           <div className="contact-item">
//             <i className="fa-solid fa-paper-plane"></i>
//             <p>
//               <strong>Email:</strong> Ramustudiodmm@gmail.com
//             </p>
//           </div>
//         </div>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <h1>Get in touch</h1>
//         <p>
//           Choose the most convenient method and we’ll get back to you as soon as
//           we can.
//         </p>
//         <div className="input">
//           <label>Name:</label>
//           <input
//             name="name"
//             type="text"
//             onChange={handleChange}
//             value={values.name}
//             onBlur={handleBlur}
//             placeholder="Name"
//           />
//           {errors.name && touched.name && (
//             <div className="error">{errors.name}</div>
//           )}
//         </div>
//         <div className="input">
//           <label>Email:</label>
//           <input
//             name="email"
//             type="email"
//             onChange={handleChange}
//             value={values.email}
//             onBlur={handleBlur}
//             placeholder="Email"
//           />
//           {errors.email && touched.email && (
//             <div className="error">{errors.email}</div>
//           )}
//         </div>
//         <div className="input">
//           <label>Subject:</label>
//           <input
//             name="subject"
//             onChange={handleChange}
//             value={values.subject}
//             onBlur={handleBlur}
//             placeholder="Subject"
//           />
//           {errors.subject && touched.subject && (
//             <div className="error">{errors.subject}</div>
//           )}
//         </div>
//         <div className="input-textarea">
//           <label>Your Message:</label>
//           <textarea
//             name="message"
//             onChange={handleChange}
//             value={values.message}
//             onBlur={handleBlur}
//             placeholder="Message"
//             maxLength="101"
//           />
//           {errors.message && touched.message && (
//             <div className="error">{errors.message}</div>
//           )}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Contact;

import { useFormik } from 'formik';
import React, { useState } from 'react';
import validationSchema from '../../Components/Contact/Validation';

function Contact() {
  const [thankYouMessage, setThankYouMessage] = useState('');

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      onSubmit: async (values) => {
        const response = await fetch('http://localhost/project/contact.php', { // Update the URL to your PHP script path
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (!data.success) {
          // If there are errors, set the errors in formik
          console.log(data.errors);
          Object.keys(data.errors).forEach((key) => {
            errors[key] = data.errors[key];
          });
        } else {
          // Display thank you message upon successful submission
          setThankYouMessage("Thank you for reaching out! Your message has been successfully sent. We appreciate your interest and will get back to you shortly.");
          // Optionally reset form or clear values
          // values.name = '';
          // values.email = '';
          // values.subject = '';
          // values.message = '';
        }
      },
      validationSchema,
    });

  return (
    <div className="contact-page">
      <div className="left-side">
        <h1>Let's get in touch</h1>
        <p className="opening">
          We're open for any suggestion or just to have a chat.
        </p>
        <div className="contact-items">
          <div className="contact-item">
            <i className="fa-solid fa-map-pin"></i>
            <p>
              <strong>Address:</strong> 1st Floor, Gandhi Nagar, Dharmavaram, 515671.
            </p>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-phone"></i>
            <p>
              <strong>Phone:</strong> +91 9440781599
            </p>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-paper-plane"></i>
            <p>
              <strong>Email:</strong> Ramustudiodmm@gmail.com
            </p>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Get in touch</h1>
        <p>
          Choose the most convenient method and we’ll get back to you as soon as
          we can.
        </p>
        <div className="input">
          <label>Name:</label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
            placeholder="Name"
          />
          {errors.name && touched.name && (
            <div className="error">{errors.name}</div>
          )}
        </div>
        <div className="input">
          <label>Email:</label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            placeholder="Email"
          />
          {errors.email && touched.email && (
            <div className="error">{errors.email}</div>
          )}
        </div>
        <div className="input">
          <label>Subject:</label>
          <input
            name="subject"
            onChange={handleChange}
            value={values.subject}
            onBlur={handleBlur}
            placeholder="Subject"
          />
          {errors.subject && touched.subject && (
            <div className="error">{errors.subject}</div>
          )}
        </div>
        <div className="input-textarea">
          <label>Your Message:</label>
          <textarea
            name="message"
            onChange={handleChange}
            value={values.message}
            onBlur={handleBlur}
            placeholder="Message"
            maxLength="101"
          />
          {errors.message && touched.message && (
            <div className="error">{errors.message}</div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
      {thankYouMessage && <div className="thank-you-message">{thankYouMessage}</div>}
    </div>
  );
}

export default Contact;


