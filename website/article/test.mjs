import { runTests, testURL, waitFor } from "./shared/webtest-lib.js";

export const main = async () => {
   await runTests(testURL("convolution")([ page => waitFor("svg#fig-output")(page) ]))()
   await runTests(testURL("moving-average")([ page => waitFor("svg#fig-output")(page) ]))()
   await runTests(testURL("non-renewables")([
      page => waitFor("svg#fig-barChart")(page),
      page => waitFor("svg#fig-scatterPlot")(page),
   ]))()
}
