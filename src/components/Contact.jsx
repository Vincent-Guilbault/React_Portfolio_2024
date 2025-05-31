import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-10 text-center text-4xl"
      >
        Me contacter
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
      </div>
      <div className="text-center mt-8">
        <a
          href="/Vincent_Guilbault_CV_2025_FrontEnd.pdf" // Link to the PDF in the public folder
          download="Vincent_Guilbault_CV.pdf" // Specify download name
          className="inline-block px-6 py-3 mt-4 text-white bg-purple-500 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Télécharger mon CV
        </a>
      </div>
    </div>
  );
};

export default Contact;
