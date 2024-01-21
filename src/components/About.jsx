import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"        
      >
        <div options={{ max: 45, scale: 1, speed: 450 }} 
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[100px] flex justify-evenly items-center flex-col"
        >
          {/* <img src={icon} alt={title}
          className="w-16 h-16 object-contain" /> */}
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        
        </div>




      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          who we are
        </p>
        <h2 className={styles.sectionHeadText}>Our goals</h2>
      </motion.div>

      <motion.p
      variants={fadeIn('','',0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        We are a team of Human Resources professionals with more than 15 years of experience in various types of companies and HR processes. We consider ourselves strategic partners, actively supporting the hiring needs of the business with concrete actions.
        
        We aim to help you find the best talent to reach your maximum potential. We approach every challenge as an opportunity to make a difference, focusing on conducting high-quality hiring processes and providing continuous support to our partners at all times.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10"> 
        {services.map((service, index ) => (
          <ServiceCard  key={service.title} index={index} {...service} />
   
        ))}

      </div>
    
    </>
  )
}

export default SectionWrapper(About, 'about')