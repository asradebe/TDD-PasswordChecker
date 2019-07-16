describe("password_is_valid()", function() {
    it("password should be larger than 8 characters",function() {
        let check = password_is_valid("sugar");
        expect(check).toBe(false);
    });

    it("password should not be null",function() {
        let check = password_is_valid("sugar");
        expect(check).toBe(false);
    });

    it("password should have at least one uppercase letter",function() {
        let check = password_is_valid("Sugar");
        expect(check).toBe(false);
    });
    it("password should have at least one lowercase letter",function() {
        let check = password_is_valid("Sugar");
        expect(check).toBe(false);
    });
    it("password should have at least one number",function() {
        let check = password_is_valid("Sugar");
        expect(check).toBe(false);
    });
    it("password should be larger than 8 characters,should not be null and must have at least one lowercase, uppercase letter and one number",function() {
        let check = password_is_valid("SugarLove23");
        expect(check).toBe(true);
    });
    
});

describe("password_is_okay()", function() {
    it("password should be greater than 8 characters",function() {
        let check = password_is_valid("sugar");
        expect(check).toBe(false);
    });

    it("password should be greater than 8 characters and have at least one uppercase letter",function() {
        let check = password_is_valid("sugarlove");
        expect(check).toBe(false);
    });

    it("password should be greater than 8 characters and have at least one lowercase letter",function() {
        let check = password_is_valid("sugarlove");
        expect(check).toBe(false);
    }); 

    it("password should be greater than 8 characters and should have at least one number",function() {
        let check = password_is_valid("sugarlove");
        expect(check).toBe(false);
    });
    it("password should be greater than 8 characters and should not be null",function() {
        let check = password_is_valid("sugarlove");
        expect(check).toBe(false);
    });
     it("password should be larger than 8 characters,should not be null and must have at least one lowercase, uppercase letter and one number",function() {
        let check = password_is_valid("SugarLove23");
        expect(check).toBe(true);
    });
})