export const transformCountriesData = data => {
  return data.map(
    ({ name: { common }, capital, flags, population, languages }) => {
      return {
        id: common,
        country: common,
        flag:
          common === 'Russia'
            ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRInrKwDiu3oYD2W0qgPPpxmpkuWVE2X_v9Zg&s'
            : flags.png,
        capital,
        population,
        languages,
      };
    },
  );
};

export const transformCountryData = data => {
  return data.map(
    ({
      name: { common, official },
      flags,
      capital,
      population,
      languages,
    }) => ({
      id: common,
      countryName: official,
      flag: flags.png,
      capital,
      population,
      languages: Object.values(languages),
    }),
  );
};
