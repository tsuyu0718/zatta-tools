export interface ApiResponse {
  game_count: number;
  games: Game[];
}

export interface Game {
  appid: number;
  name: string;
  playtime_forever: number;
  img_icon_url: string;
  img_logo_url: string;
  playtime_windows_forever: number;
  playtime_mac_forever: number;
  playtime_linux_forever: number;
  has_community_visible_stats?: boolean;
  playtime_2weeks?: number;
  discount_percent?: number;
}

export interface Price {
  success: boolean;
  data: any[] | DataClass;
}

export interface DataClass {
  price_overview: PriceOverview;
}

export interface PriceOverview {
  currency: string;
  initial: number;
  final: number;
  discount_percent: number;
  initial_formatted: string;
  final_formatted: string;
}