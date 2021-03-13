import { revertString } from "../../utils/revertString.js";

xdescribe("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("abc")).toBe("cba"));
});
