export const pokemonId = (url: string): string => {
  const openingTag = 'pokemon/';
  const closingTag = '/';
  return url.substring(
    url.lastIndexOf(openingTag) + openingTag.length,
    url.lastIndexOf(closingTag)
  );
};

export const capitalizedName = (name: string): string => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};
