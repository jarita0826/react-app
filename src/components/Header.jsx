import { ReactComponent as BACK_ICON } from "../assets/icon/chevron.svg";
export default function Header({ title, back = false }) {
  return (
    <header className="border-b py-2 flex justify-center">
      {
        back && (<button className="p-2 absolute left-0">
          <BACK_ICON className="w-3" />
        </button>)
      }
      <h1 className="text-md font-bold text-center py-2">{title}</h1>
    </header>
  );
}