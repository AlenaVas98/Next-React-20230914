import { Menu } from "@/components/Menu/component";
import { getDishById } from "@/redux/sevices/api";
import styles from "./styles.module.css";
import { MainLinkContainer } from "@/components/Link/container";
import { CartContainer } from "@/components/Cart/container";

export default async function MenuPage({ params: { restaurantId } }) {
  const restaurants = await getDishById(restaurantId);
  return (
    <div>
      <div className={styles.boxLinks}>
        <MainLinkContainer className={styles.link} href="/restaurants">
          Products
        </MainLinkContainer>
        <MainLinkContainer
          className={styles.link}
          href={`/restaurants/${restaurantId}/menu`}
        >
          Menu
        </MainLinkContainer>
        <MainLinkContainer
          className={styles.link}
          href={`/restaurants/${restaurantId}/review`}
        >
          Review
        </MainLinkContainer>
      </div>
      <div className={styles.menuPage}>
        <Menu menu={restaurants} />
        <CartContainer />
      </div>
    </div>
  );
}
