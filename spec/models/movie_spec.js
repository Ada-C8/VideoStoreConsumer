
import Movie from 'models/movie';

describe('Movie spec', () => {
  // let movie;
  let validMovie;
  beforeEach(() => {
    validMovie = new Movie({
      title: 'valid title',
      release_date: 'valid date',
    });
  });

  describe('Attribute Validations', () => {
    it('is invalid without a title', () => {
      expect(validMovie.isValid()).toEqual(true);

      validMovie.set('title', null);

      expect(validMovie.isValid()).toEqual(false);

    });

    it('is invalid without a release_date', () => {
      expect(validMovie.isValid()).toEqual(true);

      validMovie.set('release_date', null);

      expect(validMovie.isValid()).toEqual(false);

    });

  });

});
