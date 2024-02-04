const getCroppedImageUrl = (url: string) => {
  if (!url) return "https://placehold.co/600x400";
  const target = "/media";
  const index = url.indexOf("media/") + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
