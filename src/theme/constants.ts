export interface Theme {
  sidebarWidth: number;
  borderRadius: number;
  iconSize: number;

  gap: {
    small: number;
    med: number;
    large: number;
    xLarge: number;
  };
  colors: {
    main: string;
  };
}

export const theme: Theme = {
  sidebarWidth: 200,
  borderRadius: 16,
  iconSize: 16,

  gap: {
    small: 4,
    med: 8,
    large: 16,
    xLarge: 24,
  },

  colors: {
    main: "#1c2b35",
  },
};
