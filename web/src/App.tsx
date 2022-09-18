import { GameCard } from './components/GameCard';
import { BannerCreateAd } from './components/BannerCreateAd';
import * as Dialog from '@radix-ui/react-dialog';
import './styles/main.css';
import logo from './assets/logo-esports.svg';
import { useEffect, useState } from 'react';
import { CreateAdModal } from './components/CreateAdModal';
import axios from 'axios';

interface GameData {
  id: string;
  bannerUrl: string;
  title: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [gamesListData, setGamesListData] = useState<GameData[]>([]);

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => {
        setGamesListData(response.data);
      });

  }, []);

  return (
    <main className="max-w-[1200px] mx-auto my-20 flex flex-col items-center">
      <img src={logo} alt="eSports" />
      <h1 className="mt-20 text-6xl text-white font-black">Seu <span className="bg-gradient text-transparent bg-clip-text">duo</span> está aqui.</h1>

      <section className="mt-20 grid grid-cols-6 gap-6">
        {gamesListData.map(game => (
          <GameCard
            key={game.id}
            data={{
              ...game,
              adsCount: game._count.ads
            }}
          />
        ))}
      </section>
      <Dialog.Root>
        <BannerCreateAd />
        <CreateAdModal />
      </Dialog.Root>
    </main >
  );
}

export default App;
