
import { ColorWithNickname, IconWithNickname } from "@/types/types"
import AdbIcon from '@mui/icons-material/Adb';
import HomeIcon from '@mui/icons-material/Home';
import CelebrationIcon from '@mui/icons-material/Celebration';

export const icons: IconWithNickname[]=[
  {icon: <HomeIcon />, nickname: 'antiguo'},
  {icon: <CelebrationIcon/>, nickname: 'parque'},
  {icon: <AdbIcon/>, nickname: 'cultura'}
]
export const colors: ColorWithNickname[]=[
  {color: "bg-[#f2f2f2]", nickname: 'antiguo'},
  { color: 'bg-blue-300', nickname: 'parque' },
  { color: 'bg-green-400', nickname: 'cultura' }
]