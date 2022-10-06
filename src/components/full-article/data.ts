import ArticleImage from '../../assets/articles-images/card.png';
import ContentImageOne from '../../assets/article/content_image_1.png';
import ContentImageTwo from '../../assets/article/content_image_2.png';
import bannerImage from '../../assets/banner_image.png';
import bannerButton from '../../assets/banner_button.svg';
import FacebookIcon from '../../assets/article/social-networks/facebook.svg';
import Ok from '../../assets/article/social-networks/ok.svg';
import Twitter from '../../assets/article/social-networks/twitter.svg';
import Vk from '../../assets/article/social-networks/vk.svg';

export const fullArticle = {
  title: 'Что изменилось в начислении пособий для безработных в 2020 году',
  date: '2 декабря 2021',
  mainImage: ArticleImage,
  paragraph1: `Столько мемов о том, как все не любят голосовые! А кто эти 30 миллионов
        пользователей, которые записывают аудиосообщения? Признавайтесь 🙂 Для
        сравнения: это почти треть тех, кто активно пользуется ресурсом каждый
        месяц.`,
  contentImage1: ContentImageOne,
  contentImage2: ContentImageTwo,
  paragraph2: `Понимаем представителей обеих сторон. Голосовые сообщения любят за
        скорость — в дороге, например, удобнее говорить, а не писать. Ещё аудио
        ценят за особый уровень близости: они передают интонации, акценты,
        эмоции — почти как живой разговор. Но есть и минусы: например, запись не
        послушаешь во время звонка или встречи, наушники не всегда под рукой, а
        нужную информацию сложно найти в переписке.`,
  paragraph3: ` Мирим два лагеря с помощью искусственного интеллекта: наши разработчики
        создали совершенно новую технологию распознавания голосовых сообщений —
        вы уже можете её попробовать в приложении`,
  subheadingBig: 'Что умеет новая технология?',
  subheadingParagraph1: ` Мирим два лагеря с помощью искусственного интеллекта: наши разработчики
        создали совершенно новую технологию распознавания голосовых сообщений —
        вы уже можете её попробовать в приложении`,
  subheadingSmall: 'Высокая нагрузка',
  subheadingParagraph2: `Мирим два лагеря с помощью искусственного интеллекта: наши разработчики
        создали совершенно новую технологию распознавания голосовых сообщений —
        вы уже можете её попробовать в приложении`,
   bannerTitle: 'Здоровье петербуржца',
   bannerSubtitle: 'Поддержка и развитие регионов',
   bannerMainImage: bannerImage,
   bannerIconImage: bannerButton,
   linkText: 'Узнать больше',
   bannerLink: '/'
};

export const socialNetworks = [
{icon: FacebookIcon, alt: 'facebook'},
{icon: Ok, alt: 'Одноклассники'},
{icon: Vk, alt: 'VKontakte'},
{icon: Twitter, alt: 'Twitter'}
];