// import axios from 'axios';

interface SpotifyData {
  song: string;
  artist: string;
  album_art_url: string;
  track_id: string;
  timestamps: {
    start: number;
    end: number;
  };
}

interface Activity {
  name: string;
  type: number;
  details?: string;
  state?: string;
}

interface LanyardResponse {
  success: boolean;
  data: {
    discord_status: 'online' | 'idle' | 'dnd' | 'offline';
    active_on_discord_mobile: boolean;
    active_on_discord_desktop: boolean;
    listening_to_spotify: boolean;
    spotify: SpotifyData | null;
    activities: Activity[];
    discord_user: {
      id: string;
      username: string;
      avatar: string;
    };
  };
}

export interface DiscordPresence {
  status: 'online' | 'idle' | 'dnd' | 'offline';
  listeningToSpotify: boolean;
  spotify: SpotifyData | null;
  activity: Activity | null;
}

export async function fetchDiscordPresence(): Promise<DiscordPresence> {
  const response = await fetch('/api/discord');

  if (!response.ok) {
    throw new Error(`Failed to fetch Discord presence: ${response.status}`);
  }

  const { data } = (await response.json()) as LanyardResponse;

  const nonSpotifyActivity = data.activities?.find(
    (a: any) => a.name !== 'Spotify' && a.type === 0
  );

  return {
    status: data.discord_status,
    listeningToSpotify: data.listening_to_spotify,
    spotify: data.spotify,
    activity: nonSpotifyActivity ?? null,
  };
}
