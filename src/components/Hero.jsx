import { profile } from '../assets';
import { styles } from '../styles';
// import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-black-100" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-black-100">Hadi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop inspiring user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* <ComputersCanvas /> */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-end items-center pr-10">
        <img
          src={profile}
          alt="PROFILE"
          className="w-[22rem] h-[30rem] object-cover rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;
