import MenuNavItem from "./MenuNavItem";

const NavMenus = ({ drop, user }) => {
  return (
    <>
      <MenuNavItem drop={drop} address={"/"} label={"Home"}></MenuNavItem>
      <MenuNavItem
        drop={drop}
        address={"/donation-requests"}
        label={"Donation Requests"}
      ></MenuNavItem>
      <MenuNavItem drop={drop} address={"/blog"} label={"Blog"}></MenuNavItem>
      {user ? (
        <MenuNavItem
          drop={drop}
          address={"/dashboard"}
          label={"Dashboard"}
        ></MenuNavItem>
      ) : (
        <>
          <MenuNavItem
            drop={drop}
            address={"/login"}
            label={"Login"}
          ></MenuNavItem>
          <MenuNavItem
            drop={drop}
            address={"/signup"}
            label={"SignUp"}
          ></MenuNavItem>
        </>
      )}
    </>
  );
};

export default NavMenus;
