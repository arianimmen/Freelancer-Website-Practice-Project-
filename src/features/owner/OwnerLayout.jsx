import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavlink";
import Sidebar from "../../ui/Sidebar";

function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to={"/owner/dashboard"}>
          <HiHome />
          <span>خانه</span>
        </CustomNavLink>
        <CustomNavLink to={"/owner/projects"}>
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavLink>
      </Sidebar>
      
    </AppLayout>
  );
}

export default OwnerLayout;