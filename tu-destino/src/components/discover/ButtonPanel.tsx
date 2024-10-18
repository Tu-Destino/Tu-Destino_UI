import { button } from "@nextui-org/react";

type ButtonProps = {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

function ButtonPanel() {
  return(
    <div className="md:w-[10%] lg:w-[20%] h-full bg-slate-100">
        <h2>lateral</h2>
    </div>
  )
}

export default ButtonPanel;