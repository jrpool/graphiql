# graphiql

[![Code Climate GPA](https://codeclimate.com/repos/579a5a63ecc56b00640024ab/badges/744d8456fd1e64520be3/gpa.svg)](https://codeclimate.com/repos/579a5a63ecc56b00640024ab/feed)
[![Code Climate Issue Count](https://codeclimate.com/repos/579a5a63ecc56b00640024ab/badges/744d8456fd1e64520be3/issue_count.svg)](https://codeclimate.com/repos/579a5a63ecc56b00640024ab/feed)
[![Test Coverage](https://codeclimate.com/repos/579a5a63ecc56b00640024ab/badges/744d8456fd1e64520be3/coverage.svg)](https://codeclimate.com/repos/579a5a63ecc56b00640024ab/coverage)


GraphQL API Explorer for Learners Guild services.

## Getting Started

Be sure you've read the [instructions for contributing](./CONTRIBUTING.md).

1. Clone the repository.

2. Setup and run [mehserve][mehserve]. Then figure out which port you intend to use and create the mehserve config file:

        $ echo 9002 > ~/.mehserve/graphiql.learnersguild

3. Set your `NODE_ENV` environment variable:

        $ export NODE_ENV=development

4. Get the private and public keys for verifying / extending JWT tokens (see the [idm][idm] service).

5. Create a `.env.development` file for your local environment. Example:

        PORT=9002
        APP_BASE_URL=http://graphiql.learnersguild.dev
        IDM_BASE_URL=http://idm.learnersguild.dev
        GAME_BASE_URL=http://game.learnersguild.dev
        JWT_PRIVATE_KEY="<get from IDM service>"
        JWT_PUBLIC_KEY="<get from IDM service>"

6. Run the setup tasks:

        $ npm install

7. Run the server:

        $ npm start

8. Visit the server in your browser:

        $ open http://graphiql.learnersguild.dev


## License

See the [LICENSE](./LICENSE) file.


[idm]: https://github.com/LearnersGuild/idm
[mehserve]: https://github.com/timecounts/mehserve
