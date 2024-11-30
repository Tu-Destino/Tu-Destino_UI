
import { ColorWithNickname, IconWithNickname } from "@/types/types"
import CultureIcon from '@mui/icons-material/LocalLibrary';
import ArtIcon from '@mui/icons-material/Brush';
import AntiqueIcon from '@mui/icons-material/HistoryEdu'; 
import PlacesIcon from '@mui/icons-material/Place'; 
import DesignIcon from '@mui/icons-material/Architecture'; 
import GastronomyIcon from '@mui/icons-material/RestaurantMenu'; 
import RestaurantIcon from '@mui/icons-material/Restaurant'; 
import ActivitiesIcon from '@mui/icons-material/Sports'; 
import MuseumIcon from '@mui/icons-material/AccountBalance'; 
import ParkIcon from '@mui/icons-material/Park';
import NatureIcon from '@mui/icons-material/Nature'; 
import LodgingIcon from '@mui/icons-material/Hotel'; 
import LuxuryIcon from '@mui/icons-material/Diamond';
import ViewpointIcon from '@mui/icons-material/Terrain'; 
import MountainIcon from '@mui/icons-material/Landscape'; 
import ForestIcon from '@mui/icons-material/Forest'; 
import GardenIcon from '@mui/icons-material/LocalFlorist'; 
import HistoryIcon from '@mui/icons-material/TravelExplore';
import MosqueIcon from '@mui/icons-material/Mosque';

export const icons: IconWithNickname[] = [
  { icon: <CultureIcon />, nickname: 'cultura' },
  { icon: <HistoryIcon />, nickname: 'historia' },
  { icon: <ArtIcon />, nickname: 'arte' },
  { icon: <MosqueIcon />, nickname: 'monumento' },
  { icon: <AntiqueIcon />, nickname: 'antiguo' },
  { icon: <PlacesIcon />, nickname: 'lugares' },
  { icon: <DesignIcon />, nickname: 'diseño arquitectónico' },
  { icon: <GastronomyIcon />, nickname: 'gastronomía' },
  { icon: <RestaurantIcon />, nickname: 'restaurante' },
  { icon: <ActivitiesIcon />, nickname: 'actividades' },
  { icon: <MuseumIcon />, nickname: 'museo' },
  { icon: <ParkIcon />, nickname: 'parque' },
  { icon: <NatureIcon />, nickname: 'naturaleza' },
  { icon: <LodgingIcon />, nickname: 'hospedajes' },
  { icon: <LuxuryIcon />, nickname: 'lujo' },
  { icon: <ViewpointIcon />, nickname: 'mirador' },
  { icon: <MountainIcon />, nickname: 'montaña' },
  { icon: <ForestIcon />, nickname: 'bosque' },
  { icon: <GardenIcon />, nickname: 'jardín' }
];

export const colors: ColorWithNickname[] = [
  { color: "bg-[#f2f2f2]", nickname: 'antiguo' },
  { color: 'bg-gray-500', nickname: 'historia'},
  { color: 'bg-blue-300', nickname: 'parque' },
  { color: 'bg-green-400', nickname: 'cultura' },
  { color: 'bg-purple-300', nickname: 'arte' },
  { color: 'bg-gray-400', nickname: 'monumento' },
  { color: 'bg-yellow-300', nickname: 'lugares' },
  { color: 'bg-red-300', nickname: 'diseño arquitectónico' },
  { color: 'bg-orange-300', nickname: 'gastronomía' },
  { color: 'bg-yellow-500', nickname: 'restaurante' },
  { color: 'bg-blue-500', nickname: 'actividades' },
  { color: 'bg-pink-300', nickname: 'museo' },
  { color: 'bg-green-500', nickname: 'naturaleza' },
  { color: 'bg-indigo-300', nickname: 'hospedajes' },
  { color: 'bg-teal-300', nickname: 'lujo' },
  { color: 'bg-blue-700', nickname: 'mirador' },
  { color: 'bg-[#9f7d50]', nickname: 'montaña' },
  { color: 'bg-green-700', nickname: 'bosque' },
  { color: 'bg-green-300', nickname: 'jardín' }
];
