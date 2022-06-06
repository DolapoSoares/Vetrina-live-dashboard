import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RadarOutlinedIcon from '@mui/icons-material/RadarOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { SidebarItem } from "./DashboardInterface";

export const SidebarUpper: SidebarItem[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <HomeOutlinedIcon />,
  },
  {
    title: "Catalogue",
    path: "#",
    icon: <ShoppingCartOutlinedIcon />,
    iconClosed: <KeyboardArrowDownOutlinedIcon />,
    iconOpened: <KeyboardArrowUpOutlinedIcon />,
    subnav: [
      {
        title: "Catalogue 1",
        path: "#",
      },
      {
        title: "Catalogue 2",
        path: "#",
      },
    ],
  },
  {
    title: "Orders",
    path: "#",
    notification: 4,
    icon: <FormatListBulletedOutlinedIcon />,
  },
  {
    title: "Customers",
    path: "#",
    icon: <PersonOutlineOutlinedIcon />,
  },
  {
    title: "Marketing",
    path: "#",
    icon: < RadarOutlinedIcon/>,
    iconClosed: <KeyboardArrowDownOutlinedIcon />,
    iconOpened: <KeyboardArrowUpOutlinedIcon />,
    subnav: [
      {
        title: "Discount codes",
        path: "#",
      },
      {
        title: "Exit intent",
        path: "#",
      },
      {
        title: "Checkout Features",
        path: "#",
      },
      {
        title: "Post-purchase conversion",
        path: "#",
      },
      {
        title: "Cart abandonment",
        path: "#",
      },
      {
        title: "Timer checkout",
        path: "#",
      },
      {
        title: "Sell on Social",
        path: "#",
      },
      {
        title: "Special offer",
        path: "#",
      },
      {
        title: "Seasonal offer",
        path: "#",
      },
    ],
  },
  {
    title: "Delivery Options",
    path: "#",
    icon: <LocalShippingOutlinedIcon />,
  },
  {
    title: "Payment Options",
    path: "#",
    icon: <AttachMoneyOutlinedIcon />,
  },
  {
    title: "Store Design",
    path: "#",
    icon: <BrushOutlinedIcon />,
  },
  {
    title: "Subscriptions",
    path: "#",
    icon: <CreditCardOutlinedIcon />,
  },
  {
    title: "Integrations",
    path: "#",
    icon: <IntegrationInstructionsOutlinedIcon />,
  },
  {
    title: "Extensions",
    path: "#",
    icon: <WidgetsOutlinedIcon />,
  },
  {
    title: "Settings",
    path: "#",
    icon: <SettingsOutlinedIcon />,
  },
  {
    title: "Log out",
    path: "#",
    icon: <LogoutOutlinedIcon />,
  },
];
export const SidebarLower: SidebarItem[] = [
  {
    title: "Customer Support",
    path: "#",
    icon: <HelpOutlineOutlinedIcon />,
  },
  {
    title: "Share your shop",
    path: "#",
    icon: <ShareOutlinedIcon />,
  },
  {
    title: "View your shop",
    path: "#",
    icon: <RemoveRedEyeOutlinedIcon />,
  },
];
