const createPhoneNumber = (numbers) => {
      let phone = "(XXX) XXX-XXXX";
      for (let i of numbers) {
        phone = phone.replace("X", i);
      }
      return phone;
}
module.exports = createPhoneNumber