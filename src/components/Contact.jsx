import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { target } = e;
    const  { name, value } = target;

    setForm({ ...form, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_myq4t1l', 
        'template_27yijvm',
        {
          from_name: form.name,
          to_name: 'moki-dev',
          from_email: form.email,
          to_email: 'lupe.augier@linking-people.co',
          message: form.message  
        }, 
        'kJrU5mGvMeosYy9Pa'
    )
    .then(
      () => {
        setLoading(false);
        alert('Thank you for your message. We will get back to you shortly');
        
        setForm({
          name: "",
          email: "",
          message: "",
        })
    },
      (error) => {
        setLoading(false);

        console.log(error); 
        alert('Oops! Something went wrong. Please try again later.') 
      }
    )
  }

  return (
    <div
    className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='What is your name?'
              className='bg-teriary py-4 px-6 placerholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='What is your email?'
              className='bg-teriary py-4 px-6 placerholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What is your message?'
              className='bg-teriary py-4 px-6 placerholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
          </label>

          <button
            type='submit'
            className='bg-teriary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
          </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>


    </div>
  )
}

export default SectionWrapper(Contact, "contact")