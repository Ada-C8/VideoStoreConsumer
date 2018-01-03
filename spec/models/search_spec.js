import Search from 'models/search';

describe('Search spec', () => {

  describe('validate', () => {
    it ('requires a release_date', () => {
      const invalidSearchNoReleaseDate = new Search({
        title: 'Jaws',
      })
      expect(invalidSearchNoReleaseDate.isValid()).toBeFalsy();
    });

    it ('requires a title', () => {
      const invalidSearchNoTitle = new Search({
        release_date: '1975-06-18',
      })
      expect(invalidSearchNoTitle.isValid()).toBeFalsy();
    });

    it ('creates a movie if title and release date are provided', () => {
      const validSearch = new Search({
        title: 'Jaws',
        release_date: '1975-06-18',
      });
      expect(validSearch.isValid()).toBeTruthy();
    });
  });
});
