import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavlink";
import Sidebar from "../../ui/Sidebar";

function FreelancerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to={"dashboard"}>
          <HiHome />
          <span>خانه</span>
        </CustomNavLink>
        <CustomNavLink to={"projects"}>
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavLink>
        <CustomNavLink to={"proposals"}>
          <HiCollection />
          <span>درخواست ها</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default FreelancerLayout;
