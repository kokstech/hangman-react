export default function Navbar(props: any) {
  return (
    <nav className="navbar navbar-light">
      <div>
        <button
          className={`btn ${props.isDark ? "text-white" : "text-dark"}`}
          onClick={props.dark}
        >{`${props.isDark ? "light" : "dark"} `}</button>
      </div>
    </nav>
  );
}
