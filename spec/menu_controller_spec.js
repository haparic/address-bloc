const MenuController = require("../controllers/MenuController");

// #1
describe("MenuController", () => {
    
    beforeEach(() => {
        this.menu = new MenuController();
      });

    describe("#remindMe()", () => {
// #3
    it("should return 'Learning is a life-long pursuit'", () => {
        expect(this.menu.remindMe()).toBe('Learning is a life-long pursuit')
    });
    });
  });