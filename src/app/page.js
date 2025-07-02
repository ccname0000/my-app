import Header from "./component/Header";
export default function Home() {
  const headerItems = ["Who we are", "What We Do", "Her Story", "Library"];
  return (
    <div>
        <Header items={headerItems}/>
    </div>
  );
}
