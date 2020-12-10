# NHS number validator (JS)


A simple NHS number generator & validator, following the process described in the [NHS Data Dictionary](http://www.datadictionary.nhs.uk/data_dictionary/attributes/n/nhs/nhs_number_de.asp?shownav=0?query=%22nhs+number%22&rank=100&shownav=1).

Based on https://github.com/spikeheap/nhs-number-validator

## Installation

```sh
yarn add nhs-numbers
```

## Usage

```javascript

import {
  generateNhsNumber,
  generateInvalidNhsNumbers,
  generateValidNhsNumbers,
  validateNhsNumber
} from "nhs-numbers"

// generate
const nhsNumber = generateNhsNumber()
const validNhsNumbers = generateValidNhsNumbers(10)
const invalidNhsNumbers = generateInvalidNhsNumbers(10)

// validate
const result = validateNhsNumber("1234567880")
```

## Contributing

### Setup

```sh
yarn
```

### Test

```sh
yarn test
```
