import data from "@/lib/data";
import { HomeCarousel } from "./HomeCarousel";

export default async function Page() {
  return (
    <div>
      <HomeCarousel items={data.carousels} />
    </div>
  );
}
