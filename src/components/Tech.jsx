import React from 'react'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { BallCanvas } from './canvas'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'

const Tech = () => {
  return (
    <>
        <motion.div className={styles.padding} variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What tech we use
        </p>
        <h2 className={styles.sectionHeadText}>
          Our Favs
        </h2>
      </motion.div>

    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
          <p className='text-center font-poppins font-medium text-[16px] mt-2'>{technology.name}</p>
          </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, '')