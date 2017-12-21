import Rental from 'models/rental';

describe('Rental spec', () => {

  describe('Initialize function', () => {
    it('should exhibit attibutes', () => {
      const rentalDate = new Date();
      const rental = new Rental({
        title: 'Jaws',
        customer_id: 1,
        due_date: rentalDate,
      });

      expect(rental.get('title'))
        .toEqual('Jaws');
      expect(rental.get('customer_id'))
        .toEqual(1);
      expect(rental.get('due_date'))
        .toEqual(rentalDate);
    });
  });

  describe('Validate function', () => {
    it('should set isValid() to false and return an object with correct message if missing title', () => {
      const rental = new Rental({
        // title: 'Jaws',
        customer_id: 1,
        due_date: new Date(),
      });

      // order.set({"targetPrice": '0'});
      expect(rental.isValid()).toBeFalsy();
      expect(rental.validationError).toEqual({'title': ['cannot be blank']})
    });

    it('should set isValid() to false and return an object with correct message if missing customer_id', () => {
      const rental = new Rental({
        title: 'Jaws',
        // customer_id: 1,
        due_date: new Date(),
      });

      expect(rental.isValid()).toBeFalsy();
      expect(rental.validationError).toEqual({'customer_id': ['cannot be blank']})
    });

    it('should set isValid() to false and return an object with correct message if missing due_date', () => {
      const rental = new Rental({
        title: 'Jaws',
        customer_id: 1,
        // due_date: new Date(),
      });

      expect(rental.isValid()).toBeFalsy();
      expect(rental.validationError).toEqual({'due_date': ['cannot be blank']})
    });
  });
});
