# real-life-technical-tests

The intention of creating this repository is to, hopefully, create a more human approach to do technical interview. While sometimes a riddle or brain teasers can be good (especially in terms of performance), these kind of tests _can_ be unnatural at times.

For example, me, as someone who does frontend development on a day-to-day basis, I rarely face performance issues in the UI, unless there are a lot of elements in the DOM, or there is a very heavy process in the main thread... which are mostly related to product requirements (I don't just do it for fun). Remember, premature optimization is the root of all evil. Instead, as a frontend engineer, what I face usually on a day-to-day basis:

- Breaking down the design of a page
- Implementing the design of a page
- Reading documentations
- Debugging incorrect behavior
- Doing code reviews
- Resolving a stalemate in a code review discussion
- Writing tests
- Reading parts of the codebase that I didn't write

With that in mind, I want to fill up this repository with stuff that is hopefully closer to what we do on a day-to-day basis.

## Contributing

Please feel free to contribute any kind of code tests that you want. I want each example test here is "isolated", including their dependencies. This is because, when we are doing an example test, we perhaps only want to pull dependencies that are related to that test. That was also the reason why Yarn workspaces wasn't used in the first place.

The steps to add an example test:

1. Add a folder with the format of `{n}-{name}`, where `n` is a padded number (relative to the number of tests) and `name` is the test name in `dash-case`.
2. Add the expected result (using test, be it unit test, component test, or end-to-end test), so that people can verify their result
3. Add the GitHub Action. This, we can follow the previous existing conventions. At the moment, ensure that it only runs on `pull_request` against `main` branch. Additionally, to prevent all tests running together, don't forget to also add the `paths`. Lastly, ensure that the current working directory and the cache dependency paths are correct.

## License

MIT
