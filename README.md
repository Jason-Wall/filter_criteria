# USBR Filter Criteria Calculator

## Functionalities/ User Stories

- Calculation and visualization of filter sand compatability using the [USBR criteria for embankment dams](https://www.usbr.gov/tsc/techreferences/designstandards-datacollectionguides/finalds-pdfs/DS13-5.pdf)

### Phase 1 - Plotting Data - [D3.js](https://d3js.org/)

- Plot template in logscale.
- Be able to create a new line and append to plot template.
- I want to see a summary of the calculations beneath the plot.
- Calculate filter criteria

### Phase 2 - Display Calculations - [MathJax](https://codingislove.com/display-maths-formulas-webpage/)

- Need to show outputs of calculations
- Need to show output curve
- I want to print pdfs showing calculations.
- I want users to be able to upload files (json or csv) to view.

### Phase 3 - Sample Database

- Build ERD - Schema and Seed
- Pull data up from database
- Search data by basic criteria - Date sampled, Project, coordinates.
- Upload csv to db - data validation
