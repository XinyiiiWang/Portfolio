import { v4 as uuidv4 } from 'uuid';

import ListifyImg from '../images/Listify.png';
import SabelImg from '../images/Sabel & Tiny.png';
import SteamindImg from '../images/Steamind.png';
import SpirImg from '../images/Spir.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Listify',
    desc: 'The interface of customizing your playlists and discovering inspirations for your playlists.',
    img: ListifyImg,
  },
  {
    id: uuidv4(),
    name: 'Sabel & Tiny',
    desc: 'A 2D side scroller platform puzzle game where the player has control over Sabel and her companion Tiny as they explore the world, a moon named Mira.',
    img: SabelImg,
  },
  {
    id: uuidv4(),
    name: 'Steamind',
    desc: 'Steamind is a tool for visualizing games from your own Steam library as well as other games from Steam that might suit your interests.',
    img: SteamindImg,
  },
  {
    id: uuidv4(),
    name: 'Spir: Take a breather with a smart coaster',
    desc: 'Take a breather with a smart coaster',
    img: SpirImg,
  },
];

export default projects;
