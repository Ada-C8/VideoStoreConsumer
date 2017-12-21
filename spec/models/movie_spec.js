import Movie from 'models/movie';

describe('Quote spec', () => {
  let movie;
  beforeEach(() => {
    movie = new movie({
      title: 'Test Movie',
      release_date: '1998-10-10',
      overview: 'some overview text here',
      image_url: 'https://image.tmdb.org/t/p/w185/eruhq6kmjV7wopA7GjNDHrmAl89.jpg'
    });
  });

  describe('Buy function', () => {
    it('increases the price by $1.00', () => {
      const startPrice = quote.get('price');

      quote.buy();

      expect(quote.get('price')).toEqual(startPrice + 1.00);
    });
  });

  describe('Sell function', () => {
    it('decreases the price by $1.00', () => {
      const startPrice = quote.get('price');

      quote.sell();

      expect(quote.get('price')).toEqual(startPrice - 1.00);
    });
  });
});
