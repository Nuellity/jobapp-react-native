export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^(https?|ftp):\\/\\/[\\w-]+(\\.[\\w-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?$",
      "i"
    );
    return pattern.test(url);
  }
};
