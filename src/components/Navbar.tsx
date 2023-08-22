export default function Navbar(props: any) {
  return (
    <nav className="navbar navbar-light">
      <div>
        <button
          className={`navbar-toggler ${
            props.isDark ? "text-white" : "text-dark"
          }`}
          onClick={props.toggleDark}
        >{`${props.isDark ? "light" : "dark"} `}</button>
      </div>
    </nav>
  );
}
