const getHeroClassification = victories => {
  const ratingData = [
    { minVictories: 10, rating: 'Ferro' },
    { minVictories: 11, maxVictories: 20, rating: 'Bronze' },
    { minVictories: 21, maxVictories: 50, rating: 'Prata' },
    { minVictories: 51, maxVictories: 80, rating: 'Ouro' },
    { minVictories: 81, maxVictories: 90, rating: 'Diamante' },
    { minVictories: 91, maxVictories: 100, rating: 'Lendário' },
    { maxVictories: 101, rating: 'Imortal' }
  ];

  const classification = ratingData.find(
    iterator =>
      (iterator.maxVictories === undefined && victories <= iterator.minVictories) ||
      (victories >= iterator.minVictories && victories <= iterator.maxVictories) ||
      (iterator.minVictories === undefined && victories >= iterator.maxVictories)
  );
  return classification.rating;
};

const getRankedBalance = (victories, defeats) => {
  return victories - defeats;
};

const getHeroMSG = (balance, level) => {
  return `O Herói tem de saldo ${balance} e está no nível ${level}`;
};

console.log(getHeroMSG(getRankedBalance(100,2), getHeroClassification(100)));
