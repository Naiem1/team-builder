import Image from 'next/image';
import Logo from '/public/assets/images/logo/logo-image396.png';
import styles from './signup.module.scss';

const SignUp = () => {
  return (
    <div className={styles.signup}>
      <div>
        <Image width={100} height={90} src={Logo} alt="logo" />
      </div>
      <div className={styles.title}>
        <h1>
          Welcome to <span>Back!</span>
        </h1>
      </div>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Email Address" />
        </div>
        <div className={styles.inputGroup}>
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <p>Forgot password?</p>
        </div>
        <button  type="submit">Continue</button>
      </form>
      <p>
        Already have a account? <a>Sign in</a>
      </p>
    </div>
  );
};

export default SignUp;
