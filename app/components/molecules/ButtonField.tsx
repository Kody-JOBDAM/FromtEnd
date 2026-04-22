import { Button, type ButtonSkin } from "../atoms";

type ButtonFieldProps = {
    content?: React.ReactNode;
    skin?: ButtonSkin;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonField = ({ content, skin = "confirm", ...props }: ButtonFieldProps) => {
  return (
    <Button
      content={content}
      skin={skin}
      {...props}
    />
  );
}
