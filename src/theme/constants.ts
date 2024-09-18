export interface Theme {
  sidebarWidth: number;
  gap: number;
  borderRadius: number;

  colors: {
    main: string;
  };
}

export const theme: Theme = {
  sidebarWidth: 160,
  gap: 8,
  borderRadius: 16,

  colors: {
    main: "#09314c",
  },
};
