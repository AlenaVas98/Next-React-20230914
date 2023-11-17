import Image from "next/image";
import styles from "./styles.module.css";
import { MainLinkContainer } from "../Link/container";
import { DarkThemeRestaurantTabs } from "./DarkThemeRestaurantTabs";

export const RestaurantTabs = ({ restaurant }) => {
  return (
    <div>
      {restaurant?.map(({ id, name, img, description }) => (
        <DarkThemeRestaurantTabs key={id}>
          <Image
            priority={true}
            src={img}
            alt="Food"
            width={80}
            height={80}
            className={styles.img}
          />
          <div className={styles.textBox}>
            <h2 className={styles.nameRestaurant}>{name}</h2>
            <p className={styles.description}>{description}</p>
          </div>
          <MainLinkContainer href={`/restaurants/${id}/menu`}>
            Go
          </MainLinkContainer>
        </DarkThemeRestaurantTabs>
      ))}
    </div>
  );
};
