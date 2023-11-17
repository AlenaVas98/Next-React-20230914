import { ReviewFormContainer } from "@/components/ReviewForm/container";
import { Reviews } from "@/components/Reviews/component";
import { getReviewById } from "@/redux/sevices/api";
import styles from "./styles.module.css";
import { MainLinkContainer } from "@/components/Link/container";

export default async function MenuPage({ params: { restaurantId } }) {
  const review = await getReviewById(restaurantId);
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
        <Reviews review={review} />
        <ReviewFormContainer restaurantId={restaurantId} />
      </div>
    </div>
  );
}
