import { FC } from "react";

export const Theme: FC = () => {
  return (
    <style global jsx>{`
      :root {
        --bg-primary: #181818;
        --bg-hover-primary: #222;
        --border-primary: #181818;
        --text-primary: #181818;
        --text-hover-primary: #222;
        --text-decoration-primary: #222;

        --text-light: #fff;
        --text-hover-light: #ddd;
        --bg-light: #fefefe;
        --bg-hover-light: #ddd;
        --border-light: #ddd;

        --bg-secondary: #e1e1e1;
        --text-secondary: #777;
        --border-secondary: #d1d1d1;

        --text-dark: #black;
        --text-hover-dark: #black;
        --border-dark: #black;
        --bg-dark: #black;

        --border-radius: 0.25rem;
        --font-family: "Open Sans", sans-serif;
      }
    `}</style>
  );
};

export default Theme;
