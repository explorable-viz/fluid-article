import { runTests, testURL, waitForFigure } from "./shared/webtest-lib.js";

export const main = async () => {
   await runTests(testURL("convolution")([ page => waitForFigure(page)("fig-output") ]))();
   await runTests(testURL("moving-average")([ page => waitForFigure(page)("fig-output") ]))();
   await runTests(testURL("non-renewables")([
      page => waitForFigure(page)("fig-barChart"),
      page => waitForFigure(page)("fig-scatterPlot"),
   ]))();
};
