export interface Theme {
  sidebarWidth: number;
  gap: number;
  borderRadius: number;
  iconSize: number;

  colors: {
    main: string;
  };
}

export const theme: Theme = {
  sidebarWidth: 200,
  gap: 8,
  borderRadius: 16,
  iconSize: 16,

  colors: {
    main: "#09314c",
  },
};
