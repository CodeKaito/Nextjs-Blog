import { CardList, CategoryList, Featured, Menu } from "@/components";

export default function Home() {
  return <div>
    <Featured />
    <CategoryList />
    <div className="flex mt-10">
      <CardList />
      <Menu />
    </div>
  </div>;
}
