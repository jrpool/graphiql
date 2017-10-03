# graphiql

[![Code Climate](https://codeclimate.com/github/LearnersGuild/graphiql/badges/gpa.svg)](https://codeclimate.com/github/LearnersGuild/graphiql)
[![Issue Count](https://codeclimate.com/github/LearnersGuild/graphiql/badges/issue_count.svg)](https://codeclimate.com/github/LearnersGuild/graphiql)
[![Test Coverage](https://codeclimate.com/github/LearnersGuild/graphiql/badges/coverage.svg)](https://codeclimate.com/github/LearnersGuild/graphiql/coverage)

GraphQL API Explorer for Learners Guild services.

## Getting Started

1. If you have not already, **globally** install [nvm][nvm], [avn][avn], and [avn-nvm][avn-nvm].

    ```bash
    curl -o- https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
    npm install -g avn avn-nvm
    avn setup
    ```

2. Fork and clone this repository.

3. If you have not already, set up and run [mehserve][mehserve]. Then figure out which port you intend to use and create the mehserve config file:

    ```bash
    echo 9002 > ~/.mehserve/graphiql.learnersguild
    ```

4. If you have not already, set your `NODE_ENV` environment variable:

    ```bash
    export NODE_ENV=development
    ```

5. Get the private and public keys for verifying and extending JWT tokens. They should already be in the `env.development` file in your IDM directory. (See the [idm][idm] service).

6. Create a `.env.development` file for your local environment. Example:

    ```bash
    PORT=9002
    APP_BASE_URL=http://graphiql.learnersguild.dev
    IDM_BASE_URL=http://idm.learnersguild.dev
    ECHO_BASE_URL=http://echo.learnersguild.dev
    JWT_PRIVATE_KEY="<get from .env.development file in your IDM directory>"
    JWT_PUBLIC_KEY="<get from .env.development file in your IDM directory>"
    ```

7. Run the setup tasks:

    ```bash
    npm install
    ```

8. Run the server:

    ```bash
    npm start
    ```

9. Visit the server in your browser:

    ```bash
    http://graphiql.learnersguild.dev
    ```

## License

See the [LICENSE](./LICENSE) file.


[idm]: https://github.com/LearnersGuild/idm
[mehserve]: https://github.com/timecounts/mehserve
[nvm]: https://github.com/creationix/nvm
[avn]: https://github.com/wbyoung/avn
[avn-nvm]: https://github.com/wbyoung/avn-nvm
