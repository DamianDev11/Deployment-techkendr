import { useState } from 'react';
import styles from './Form.module.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const Form = () => {
  const [email, setEmail] = useState(''); 

  // Function to handle changes in the email input field
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const user = {email}
      const res = await axios.post(`/api/subscribe`,user,{
        headers:{
          "Content-Type":"application/json"
        },
        // withCredentials:true
      })
      console.log(res.data)
      if(res.data.success){
        toast.success(res.data.message)
      }
    }catch(error){
      console.log("Subscription error"+error)
    }finally{
      setEmail("")
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email ID..."
        value={email}
        onChange={handleEmailChange}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Subscribe</button>
    </form>
  );
};

export default Form;
