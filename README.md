# React Native Dimensions API Returns Incorrect Dimensions

This repository demonstrates a common bug in React Native where the `Dimensions` API returns incorrect or zero dimensions, leading to layout problems. The issue is particularly noticeable during app launch and orientation changes.

The `DimensionsBug.js` file contains the buggy code that showcases the problem.  The `DimensionsBugSolution.js` file provides a solution using `onLayout` to ensure dimensions are correctly obtained after the component has been fully rendered.