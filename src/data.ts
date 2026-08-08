export type Game = {
  id: string;
  title: string;
  genre: string;
  rating: number;
  players: string;
  image: string;
  accent: string;
  tags: string[];
};

export type Tournament = {
  id: string;
  game: string;
  title: string;
  prize: string;
  date: string;
  status: 'live' | 'upcoming' | 'registering';
  teams: number;
  maxTeams: number;
};

export type Player = {
  rank: number;
  name: string;
  team: string;
  points: number;
  winRate: number;
  avatar: string;
};

export const games: Game[] = [
  {
    id: 'g1',
    title: 'Cyber Strike 2087',
    genre: 'Tactical FPS',
    rating: 4.9,
    players: '2.4M',
    image: 'https://images.pexels.com/photos/1809342/pexels-photo-1809342.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'neon',
    tags: ['5v5', 'Ranked', 'Esports'],
  },
  {
    id: 'g2',
    title: 'Aether Legends',
    genre: 'MOBA',
    rating: 4.8,
    players: '1.8M',
    image: 'https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'magenta',
    tags: ['5v5', 'Ranked', 'Draft'],
  },
  {
    id: 'g3',
    title: 'Velocity Rush',
    genre: 'Racing',
    rating: 4.7,
    players: '920K',
    image: 'https://images.pexels.com/photos/1709152/pexels-photo-1709152.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'volt',
    tags: ['Time Trial', 'Grand Prix', 'Arcade'],
  },
  {
    id: 'g4',
    title: 'Shadow Protocol',
    genre: 'Battle Royale',
    rating: 4.6,
    players: '3.1M',
    image: 'https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'cyan',
    tags: ['Squad', 'Solo', 'Ranked'],
  },
  {
    id: 'g5',
    title: 'Iron Frontier',
    genre: 'Strategy',
    rating: 4.5,
    players: '640K',
    image: 'https://images.pexels.com/photos/2693208/pexels-photo-2693208.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'orange',
    tags: ['RTS', 'Ranked', '1v1'],
  },
  {
    id: 'g6',
    title: 'Neon Brawl',
    genre: 'Fighting',
    rating: 4.8,
    players: '1.2M',
    image: 'https://images.pexels.com/photos/3761262/pexels-photo-3761262.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'blue',
    tags: ['1v1', 'Tournament', 'Casual'],
  },
];

export const tournaments: Tournament[] = [
  {
    id: 't1',
    game: 'Cyber Strike 2087',
    title: 'Apex Invitational — Season 7',
    prize: '$250,000',
    date: 'Aug 24 — 26',
    status: 'live',
    teams: 28,
    maxTeams: 32,
  },
  {
    id: 't2',
    game: 'Aether Legends',
    title: 'Worlds Qualifier: East',
    prize: '$120,000',
    date: 'Sep 02 — 04',
    status: 'registering',
    teams: 96,
    maxTeams: 128,
  },
  {
    id: 't3',
    game: 'Velocity Rush',
    title: 'Grand Circuit Finals',
    prize: '$80,000',
    date: 'Sep 14',
    status: 'upcoming',
    teams: 16,
    maxTeams: 16,
  },
  {
    id: 't4',
    game: 'Shadow Protocol',
    title: 'Blackout Open #12',
    prize: '$60,000',
    date: 'Sep 21 — 22',
    status: 'registering',
    teams: 41,
    maxTeams: 64,
  },
];

export const leaderboard: Player[] = [
  { rank: 1, name: 'Vortex', team: 'Sentinel', points: 18420, winRate: 72, avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { rank: 2, name: 'Kira.exe', team: 'Nightfall', points: 17980, winRate: 69, avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { rank: 3, name: 'Blaze', team: 'Sentinel', points: 17610, winRate: 68, avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { rank: 4, name: 'Nyx', team: 'Phantom', points: 16940, winRate: 66, avatar: 'https://images.pexels.com/photos/1681012/pexels-photo-1681012.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { rank: 5, name: 'Riptide', team: 'Nightfall', points: 16220, winRate: 64, avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200' },
];
