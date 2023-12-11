const getHeroClassification = level => {
  const ratingData = [
    { maxLevel: 1000, rating: 'Ferro' },
    { minLevel: 1001, maxLevel: 2000, rating: 'Bronze' },
    { minLevel: 2001, maxLevel: 5000, rating: 'Prata' },
    { minLevel: 6001, maxLevel: 7000, rating: 'Ouro' },
    { minLevel: 7001, maxLevel: 8000, rating: 'Platina' },
    { minLevel: 8001, maxLevel: 9000, rating: 'Ascendente' },
    { minLevel: 9001, maxLevel: 10000, rating: 'Imortal' },
    { minLevel: 10001, rating: 'Radiante' }
  ];

  const classification = ratingData.find(
    iterator =>
      (iterator.minLevel === undefined && level <= iterator.maxLevel) ||
      (level >= iterator.minLevel && level <= iterator.maxLevel) ||
      (iterator.maxLevel === undefined && level >= iterator.minLevel)
  );
  return classification.rating;
};

const getHeroMSG = (name, level) => {
  return `O Herói ${name} está no nível ${level}`;
};

console.log(getHeroMSG('Matheus', getHeroClassification(7050)));
