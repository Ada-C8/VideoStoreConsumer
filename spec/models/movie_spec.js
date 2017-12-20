import Movie from 'models/movie';

describe('Movie spec', () => {

  describe('validate', () => {
    it ('requires a release_date', () => {
      const invalidMovieNoReleaseDate = new Movie({
        title: 'Jaws',
      })
      expect(invalidMovieNoReleaseDate.isValid()).toBeFalsy();
    });

    it ('requires a title', () => {
      const invalidMovieNoTitle = new Movie({
        release_date: '1975-06-18',
      })
      expect(invalidMovieNoTitle.isValid()).toBeFalsy();
    });

    it ('creates a movie if title and release date are provided', () => {
      const validMovie = new Movie({
        title: 'Jaws',
        release_date: '1975-06-18',
      });
      expect(validMovie.isValid()).toBeTruthy();
    });
  });
});
