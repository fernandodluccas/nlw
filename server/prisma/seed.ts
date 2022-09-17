import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const games = [
  {
    title: 'Grand Theft Auto V',
    bannerUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg',
  },
  {
    title: 'League of Legends',
    bannerUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg',
  },
  {
    title: 'VALORANT',
    bannerUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg',
  },
  {
    title: 'Apex Legends',
    bannerUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg',
  },
  {
    title: 'Dota 2',
    bannerUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg',
  },
  {
    title: 'Fortnite',
    bannerUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg',
  },
];

async function main() {
  const count = await prisma.game.count();
  if (count > 0) {
    return;
  }

  for (const game of games) {
    await prisma.game.create({
      data: game,
    });
  }
}

main();
