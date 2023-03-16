export default function Navbar(props: any) {
  return (<nav className="navbar navbar-light bg-dark">
  <form className="form-inline">
    <button className="btn btn-success" type="button">Account</button>
    <button onClick={props.handlePlay} className="btn btn-info text-white" type="button">Sign out</button>
    
  </form>
</nav>)
}
