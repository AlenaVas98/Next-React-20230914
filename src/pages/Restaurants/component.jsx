import { RestaurantTabContainer } from "@/components/RestaurantTabs/container";
import Link from "next/link";
import styles from "./styles.module.css";
import { MainLinkContainer } from "@/components/Link/container";

export const RestaurantsPage = () => {
  return (
    <div className={styles.root}>
      <MainLinkContainer href="/">Back To Home</MainLinkContainer>
      <RestaurantTabContainer />
    </div>
  );
};
