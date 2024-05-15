import MenuNavItem from "./MenuNavItem";

const NavMenus = ({ drop, user }) => {
  console.log(user);
  return (
    <>
      <MenuNavItem drop={drop} address={"/"} label={"Home"} />
      <MenuNavItem
        drop={drop}
        address={"/donation-requests"}
        label={"Donation Requests"}
      />
      <MenuNavItem drop={drop} address={"/blog"} label={"Blog"}></MenuNavItem>
      {user ? (
        <>
          <MenuNavItem drop={drop} address={"/dashboard"} label={"Dashboard"} />
          {drop && (
            <>
              <MenuNavItem
                drop={drop}
                address={"/fundings"}
                label={"Fundings"}
              />
              <MenuNavItem
                drop={drop}
                address={"/logout"}
                label={"Log out"}
              />
            </>
          )}
        </>
      ) : (
        <>
          <MenuNavItem drop={drop} address={"/login"} label={"Login"} />
          <MenuNavItem drop={drop} address={"/signup"} label={"SignUp"} />
        </>
      )}
    </>
  );
};

export default NavMenus;
