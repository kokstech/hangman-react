import { useState } from "react";
import Navbar from "./Navbar";

export default function Layout(props: any) {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <div className={`rootLayout ${isDark ? "isDark" : "isLight"}`}>
      <Navbar
        isDark={isDark}
        toggleDark={(e: { preventDefault: () => void }) => {
          e.preventDefault();
          setIsDark(!isDark);
        }}
      />
      {props.children}
    </div>
  );
}
