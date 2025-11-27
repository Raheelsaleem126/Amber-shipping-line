const ContactMap = () => {
  return (
    <div className="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.5852975638806!2d67.05934091481918!3d24.879757584092477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fdcf274d8db%3A0x3bc3838db566a8e0!2sDulara%20Business%20Center!5e0!3m2!1sen!2s!4v1696161865432!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
      //   allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;

