import { useEffect } from 'react';
import { MagnifyingGlassPlus } from 'phosphor-react';
import logoImg from './assets/logo-nlw-esports.svg';
import './styles/main.css';

function App() {
  useEffect(() => {
    // fetch('https://api.twitch.tv/helix/games/top', {
    //   headers: {
    //     Authorization: 'Bearer ragzjenvlhfig0ufij7d763ff1sv3z',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((response) => console.log(response));
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 font-bold text-sm block">
              4 anúncios
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 font-bold text-sm block">
              4 anúncios
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 font-bold text-sm block">
              4 anúncios
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 font-bold text-sm block">
              4 anúncios
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 font-bold text-sm block">
              4 anúncios
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 font-bold text-sm block">
              4 anúncios
            </span>
          </div>
        </a>
      </div>
      <div className="pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
          <div>
            <h2 className="text-white font-bold text-2xl">
              Não encontrou seu duo?
            </h2>
            <p className="text-zinc-400 mt-4">
              Publique um anúncio para encontrar novos players!
            </p>
          </div>
          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            Publicar anúncio
            <MagnifyingGlassPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
