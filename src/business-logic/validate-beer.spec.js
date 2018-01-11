import validateBeer from "./validate-beer";

describe("validateBeer", () => {
    it("returns invalid for beers with no abv", () => {
        const beer = {
            id: 87983,
            brewery: {
                id: 12332,
                name: "Central Waters",
                location: "Amherst, WI",
                overallRating: 5
            },
            name: "Mudpuppy Porter",
            beerStyle: "Porter",
            abv: undefined
        };

        const result = validateBeer(beer);

        expect(result).toEqual(false);
    });

    it("returns invalid for beers with no abv (less setup)", () => {
        const beer = makeMeABeer();
        beer.abv = undefined;

        const result = validateBeer(beer);

        expect(result).toEqual(false);
    });

    function makeMeABeer() {
        return {
            id: 87983,
            brewery: {
                id: 12332,
                name: "Central Waters",
                location: "Amherst, WI",
                overallRating: 5
            },
            name: "Mudpuppy Porter",
            beerStyle: "Porter",
            abv: undefined
        };
    }
});
