import userUser from "../features/authentication/useUser";

function Header() {
  const { data } = userUser();

  return <div className="bg-secondary-0 py-4 px-8s">app Header</div>;
}

export default Header;
