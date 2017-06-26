# graphiql

[![Code Climate GPA](https://codeclimate.com/repos/579a5a63ecc56b00640024ab/badges/744d8456fd1e64520be3/gpa.svg)](https://codeclimate.com/repos/579a5a63ecc56b00640024ab/feed)
[![Code Climate Issue Count](https://codeclimate.com/repos/579a5a63ecc56b00640024ab/badges/744d8456fd1e64520be3/issue_count.svg)](https://codeclimate.com/repos/579a5a63ecc56b00640024ab/feed)
[![Test Coverage](https://codeclimate.com/repos/579a5a63ecc56b00640024ab/badges/744d8456fd1e64520be3/coverage.svg)](https://codeclimate.com/repos/579a5a63ecc56b00640024ab/coverage)


GraphQL API Explorer for Learners Guild services.

## Getting Started

Be sure you've read the [instructions for contributing](./CONTRIBUTING.md).

1. **Globally** install [nvm][nvm], [avn][avn], and [avn-nvm][avn-nvm].

    ```bash
    curl -o- https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
    npm install -g avn avn-nvm
    avn setup
    ```

2. Clone the repository.

3. Setup and run [mehserve][mehserve]. Then figure out which port you intend to use and create the mehserve config file:

    ```bash
    echo 9002 > ~/.mehserve/graphiql.learnersguild
    ```

4. Set your `NODE_ENV` environment variable:

    ```bash
    export NODE_ENV=development
    ```

5. Get the private and public keys for verifying / extending JWT tokens (see the [idm][idm] service).

6. Create a `.env.development` file for your local environment. Example:

    ```bash
    PORT=9002
    APP_BASE_URL=http://graphiql.learnersguild.dev
    IDM_BASE_URL=http://idm.learnersguild.dev
    GAME_BASE_URL=http://echo.learnersguild.dev
    JWT_PRIVATE_KEY="<get from IDM service>"
    JWT_PUBLIC_KEY="<get from IDM service>"
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
    open http://graphiql.learnersguild.dev
    ```

## License

See the [LICENSE](./LICENSE) file.


[idm]: https://github.com/LearnersGuild/idm
[mehserve]: https://github.com/timecounts/mehserve
[nvm]: https://github.com/creationix/nvm
[avn]: https://github.com/wbyoung/avn
[avn-nvm]: https://github.com/wbyoung/avn-nvm
