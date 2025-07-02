import Image from "next/image";
export default function Header({ items }) {
  const headerClass =
    "w-full h-[80px]  border-b-[1px] px-[16px] md:px-[64px] flex items-center";

  const logoClass =
    "flex items-center justify-between md:justify-center gap-[10px] md:w-[200px] h-[80px] relative flex-shrink-0";

  return (
    <header className={headerClass}>
      <div className={logoClass}>
        <div className="text-[24px] font-bold  text-gray-800">Logo</div>
      </div>
      {/* 漢堡按鈕*/}
      <Image
          src="/Vector.png"
          alt="btn"
          width={21}
          height={18}
          className="md:hidden absolute right-[16px] cursor-pointer "
        />

      {/* 選單按鈕區塊*/}
      <div className="ml-auto items-center gap-[24px] h-full hidden md:flex">
        {/* 確保 items 是陣列再進行 map 渲染 */}
        {Array.isArray(items) &&
          items.map((item, index) => (
            <button key={index} className="text-gray-700 font-medium text-[16px]">
              {item}
            </button>
          ))}
      </div>
    </header>
  );
}
