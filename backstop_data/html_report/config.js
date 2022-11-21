report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_HelloWorld_0_document_0_phone.png",
        "test": "../bitmaps_test/20221121-164057/backstop_default_HelloWorld_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_HelloWorld_0_document_0_phone.png",
        "label": "HelloWorld",
        "misMatchThreshold": 0.00001,
        "url": "http://localhost:6006/iframe.html?args=&id=helloworld--basic&viewMode=story",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.247865275142315,
          "misMatchPercentage": "0.25",
          "analysisTime": 15
        },
        "diffImage": "../bitmaps_test/20221121-164057/failed_diff_backstop_default_HelloWorld_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_HelloWorld_0_document_1_tablet.png",
        "test": "../bitmaps_test/20221121-164057/backstop_default_HelloWorld_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_HelloWorld_0_document_1_tablet.png",
        "label": "HelloWorld",
        "misMatchThreshold": 0.00001,
        "url": "http://localhost:6006/iframe.html?args=&id=helloworld--basic&viewMode=story",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.053151448567708336,
          "misMatchPercentage": "0.05",
          "analysisTime": 35
        },
        "diffImage": "../bitmaps_test/20221121-164057/failed_diff_backstop_default_HelloWorld_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});