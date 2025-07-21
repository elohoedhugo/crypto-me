import emailjs from '@emailjs/browser';

export const SendEmail =  (formRef) => {

  emailjs
      .sendForm('service_de6bboa', 'template_amzik86', formRef.current, {
        publicKey: 'LjLy5-NcA7jDxQObe',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED....', error.text);
        },
      );
};