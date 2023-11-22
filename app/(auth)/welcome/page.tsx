import Image from 'next/image';
import Logo from '/public/assets/images/logo/logo-image396.png';
import Button from '../../components/shared/button/Button';
import style from './welcome.module.scss';

const Welcome = () => {
  return (
    <div className={style.welcome}>
      <div>
        <Image width={100} height={90} src={Logo} alt="logo" />
      </div>
      <div>
        <h1>Welcome to Agile3 Team</h1>
        <h1>Log in with your account to continue</h1>
      </div>
      <div>
        
        <Button className={style.button}>Sign in</Button>
        <Button className={style.button}>Sign up</Button>
      </div>
    </div>
  );
};

export default Welcome;
