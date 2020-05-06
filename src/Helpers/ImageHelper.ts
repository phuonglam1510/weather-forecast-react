export const getThumbnailUrl = (imageID: string) => {
  return `${process.env.REACT_APP_API_URL}/api/image?id=${imageID}&quality=0`;
};

export const getMainUrl = (imageID: string) => {
  return `${process.env.REACT_APP_API_URL}/api/image?id=${imageID}&quality=100`;
};
