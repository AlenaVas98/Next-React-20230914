import styles from "./styles.module.css";
import img from "../../img/pablo-merchan-montes-hyIE90CN6b0-unsplash.jpg";
import Image from "next/image";
import { MainLinkContainer } from "@/components/Link/container";

export const MainPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.textBox}>
        <h1>RestaurantGit</h1>
        <p className={styles.text}>
          Satisfy your appetite with food delivery from our service! We offer a
          wide variety of dishes from the best restaurants and cafes in your
          city. Our team makes sure that your order is delivered fresh and hot.
          Make your choice and we guarantee that your gastronomic journey will
          begin right away. Order now and enjoy the taste!
        </p>
        <MainLinkContainer href="/restaurants">
          Go To Restaurants
        </MainLinkContainer>
      </div>
      <div>
        <Image
          priority={true}
          src={img}
          alt="Burger,Food,Delivery"
          className={styles.img}
        ></Image>
      </div>
    </div>
  );
};
