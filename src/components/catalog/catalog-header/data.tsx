import { SocialRoleItem } from './types';

import { ReactComponent as Auto } from '../../../assets/social-icons-main/auto.svg';
import { ReactComponent as Book } from '../../../assets/social-icons-main/book.svg';
import { ReactComponent as Bussiness } from '../../../assets/social-icons-main/bussiness.svg';
import { ReactComponent as ILiveHere } from '../../../assets/social-icons-main/iLiveHere.svg';
import { ReactComponent as ImGood } from '../../../assets/social-icons-main/imGood.svg';
import { ReactComponent as ILoveSpb } from '../../../assets/social-icons-main/loveSpb.svg';
import { ReactComponent as NewRole } from '../../../assets/social-icons-main/newRole.svg';
import { ReactComponent as Parent } from '../../../assets/social-icons-main/parent.svg';
import { ReactComponent as Party } from '../../../assets/social-icons-main/party.svg';
import { ReactComponent as Pet } from '../../../assets/social-icons-main/pet.svg';
import { ReactComponent as Student } from '../../../assets/social-icons-main/student.svg';
import { ReactComponent as TravelAir } from '../../../assets/social-icons-main/travel-air.svg';
import { ReactComponent as VillageHouse } from '../../../assets/social-icons-main/village-house.svg';
import { ReactComponent as Worker } from '../../../assets/social-icons-main/worker.svg';
import { ReactComponent as Sport } from '../../../assets/social-icons-main/sport.svg';

export const ALL_ROLES_ID = 0;

export const MAIN_SOCIAL_BTNS_ARRAY: SocialRoleItem[] = [
  {
    title: 'Все',
    id: 0,
  },
  {
    title: 'Я родитель',
    icon: <Parent />,
    id: 1,
  },
  {
    title: 'Я здесь живу',
    icon: <ILiveHere />,
    id: 2,
  },
  {
    title: 'Я люблю Санкт Петербург',
    icon: <ILoveSpb />,
    id: 3,
  },
  {
    title: 'Я с питомцем',
    icon: <Pet />,
    id: 4,
  },
  {
    title: 'Я молодец',
    icon: <ImGood />,
    id: 5,
  },
  {
    title: 'Я водитель',
    icon: <Auto />,
    id: 6,
  },
  {
    title: 'Я за движ',
    icon: <Party />,
    id: 7,
  },
  {
    title: 'Я водитель',
    icon: <Auto />,
    id: 8,
  },
  {
    title: 'Я пассажир',
    icon: <TravelAir />,
    id: 9,
  },
  {
    title: 'Я люблю книги',
    icon: <Book />,
    id: 10,
  },
  {
    title: 'Я за здоровье',
    icon: <Sport />,
    id: 11,
  },
  {
    title: 'Я дачник',
    icon: <VillageHouse />,
    id: 12,
  },

  {
    title: 'Добавь свою роль',
    icon: <NewRole />,
    id: 13,
  },
];
