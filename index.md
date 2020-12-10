### nhs-number-validator

[![Build Status](https://travis-ci.org/spikeheap/nhs-number-validator.svg?branch=develop)](https://travis-ci.org/spikeheap/nhs-number-validator)

A simple NHS number validator, following the process described in the [NHS Data Dictionary](http://www.datadictionary.nhs.uk/data_dictionary/attributes/n/nhs/nhs_number_de.asp?shownav=0?query=%22nhs+number%22&rank=100&shownav=1).

## Installation

##### NPM

```bash
npm install --save nhs-number-validator
```

##### Bower

```bash
bower install --save nhs-number-validator
```

## Usage

##### Command line / terminal

To run the interactive validation tool, install the NPM module globally:

```bash
npm install -g nhs-number-validator
```

and `nhs-number-validator` will be added to your path:

```bash
$ nhs-number-validator
Enter NHS numbers to validate, Ctrl-D to exit
> 123
*INVALID
> 2983396339
 VALID
```

You can also install the tool for a single project, and just reference the executable in your project:

```bash
npm install nhs-number-validator
./node_modules/.bin/nhs-number-validator
# or
`npm bin`/nhs-number-validator
```

##### Node/Browserify

For environments supporting `require`/`exports`:

```javascript
var validator = require('nhs-number-validator');

validator.validate('2983396339') // => true
validator.validate('test') // => false
```

##### Browsers

Any environment which exposes `window` will have the `nhsNumberValidator` variable attached when `index.js` is loaded, e.g.:

```html
<script src="./bower_components/nhs-number-validator/index.js"></script>
<script>
  var validator = window.nhsNumberValidator
  validator.validate('2983396339') // => true
  validator.validate('test') // => false

  // or just use it directly if you prefer:
  window.nhsNumberValidator.validate('2983396339') // => true

  // you don't even need `window`:
  nhsNumberValidator.validate('2983396339') // => true
</script>
```


### Validating NHS Numbers

TODO

### Try it out

TODO

### Authors and Contributors

- @spikeheap

### Support or Contact
If you have any problems or suggestions, please [create an issue](https://github.com/spikeheap/nhs-number-validator/issues), and we'll give you a hand. [Pull Requests](https://github.com/spikeheap/nhs-number-validator/pulls) are very welcome too!
