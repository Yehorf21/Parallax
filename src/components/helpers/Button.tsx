import { useMediaQuery } from "react-responsive";

interface Props {
  text: string;
  customPadding?: string;
}

// make rounded borders

export const Button: React.FC<Props> = ({ text, customPadding }) => {
  // handle 2 types of buttons
  const defaultPaddings = ["16px 32px", "20px 44px"];
  const isDesktop = useMediaQuery({ minWidth: '1024px' });

  const getPadding = () => {
    if (customPadding) {
      return customPadding;
    }

    return isDesktop ? defaultPaddings[1] : defaultPaddings[0];
  };
  
  return (
    <a
      href="#contactsSection"
      aria-label="button that scrolls to 'contacts' sections"
      className="w-fit text-[18px] gradient-button cursor-pointer"
      style={{ padding: getPadding() }}
    >
      {text}
    </a>
  );
};
