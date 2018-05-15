import { expect } from "chai";
import createRandomFunction from "../src/create-random-function"

describe("Create Random Function", () => {

  it("should test that it always generates the same sequence of numbers", () => {
    
    const random = createRandomFunction();
    expect(random()).to.be.equal(0.000005748588591814041);
    expect(random()).to.be.equal(0.6551540484651923);
    expect(random()).to.be.equal(0.30481433868408203);

  });

});
