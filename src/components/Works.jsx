import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { Tilt } from 'react-tilt'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75 )}
  >
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl' />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img 
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>  
        ))}

      </div>

    </Tilt>


  </motion.div>
  )
}

const Works = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What we can help you with
        </p>
        <h2 className={styles.sectionHeadText}>
          Our Searches
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px} max-w-3xl leading-[30px'
        >
          30% of profiles entering companies end their employment relationship within the first 6 months. This causes a loss of time and resources, demotivation of teams, a distorted employer brand image, among other things.
          This is what matters:
          <ul className='list-disc list-inside'>
              <li>Thoroughly assess the skills and challenges of the profile.</li>
              <li>Conduct interviews with a focus on technical skills and cultural fit.</li>
              <li>Understand the type of culture, leader's expectations, and team dynamics.</li>
              <li>Support the fit-to-role process with feedback to the company.</li>
          </ul>
        </motion.p>
      </div>
    
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index}
            {...project} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Works,'')