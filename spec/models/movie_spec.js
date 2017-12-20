import Movie from 'models/movie';

describe('Movie spec', () => {
  let movie;
  beforeEach(() => {
    movie = new Movie({
      title: 'HELLO',
    });
  });

  describe('movie validations', () => {

    it('movie is valid with a title', () => {
      expect(movie.isValid()).toEqual(true);
    });

    it('movie invalid without title', () => {
      movie.set('title', '');
      expect(movie.isValid()).toEqual(false);
    });
  });
});
