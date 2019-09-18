describe("passwordValid", function() {
    it("password should be greater than 8 characters", function() {
        expect(() => {password_is_valid("Sthand1")}).toThrow(new Error("password should be greater than 8 characters"))
    });

    it("password should not be null", function() {
        expect(function() {password_is_valid("")}).toThrow(new Error("password should not be null"))
    });

    it("password should have at least one uppercase letter", function() {
        expect(function() {password_is_valid("sthandiso")}).toThrow(new Error("password should have at least one uppercase letter"))
    });

    it("password should have at least one lowercase letter", function() {
        expect(function() {password_is_valid("STHANDISO")}).toThrow(new Error("password should have at least one lowercase letter"))
    });

    it("password should have at least one digit", function() {
        expect(function() {password_is_valid("sthandI")}).toThrow(new Error("password should have at least one digit"))
    });

    

    it("password should meet at least three of the criteria", function() {
        expect(password_is_okay("sthandiweM3")).toBe(true)
    });
});