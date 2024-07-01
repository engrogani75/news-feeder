import { getCurrentDate } from "../../utils/getCurrentDate";

const NavDate = () => {
  const formatDate = getCurrentDate();
  return <span>{formatDate}</span>;
};

export default NavDate;
