# Expected Value Calculator

A tool for finding the expected value of a bet. Developed using [Deno](https://deno.com/).

## Usage

### Run tests

```bash
deno task test
```

### Run the tool

The CLI accepts three arguments in the following order:

1. `stake`: The amount of money you want to bet (must be a positive number)
2. `bookmaker decimal odds`: The decimal odds offered by the bookmaker (must be greater than 1)
3. `true probability`: Your calculated probability of the event occurring (must be between 1 and 100)

Example:

```bash
deno task start 100 2.5 40
```
