import Image from "next/image";
import styles from "./page.module.css";
import image from '../../public/images/profilePicture.png'

export default function Home() {
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.cubeContainer}>
        <div className={styles.cube}>
          <div className={styles.face + ' ' + styles.top}>Theng Wei Seng</div>
          <div className={styles.face + ' ' + styles.bottom}>Next.js</div>
          <div className={styles.face + ' ' + styles.left}>Node.js</div>
          <div className={styles.face + ' ' + styles.right}>React.js</div>
          <div className={styles.face + ' ' + styles.front}>
            <Image
              alt="My profile picture"
              src={image}
              width={200}
              height={200}
            />
          </div>
          <div className={styles.face + ' ' + styles.back}>Vue.js</div>
        </div>
      </div>
    </div>
  );
}
