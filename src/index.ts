export const observe = (
  mediaQueryString: string,
  callback: (result: boolean) => {}
) => {
  const observer = window.matchMedia(mediaQueryString);
  const matches = (mediaQueryList: any) => callback(mediaQueryList.matches);
  observer.addListener(matches);
  matches(observer);
};
