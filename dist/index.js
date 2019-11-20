export const observe = (mediaQueryString, callback) => {
    const observer = window.matchMedia(mediaQueryString);
    const matches = (mediaQueryList) => callback(mediaQueryList.matches);
    observer.addListener(matches);
    matches(observer);
};
