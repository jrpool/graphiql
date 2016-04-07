# graphiql

GraphQL API Explorer for Learners Guild services.

## Getting Started

Be sure you've read the [instructions for contributing](./CONTRIBUTING.md).

1. Clone the repository.
2. Set your `NODE_ENV` environment variable:

        $ export NODE_ENV=development

5. Get the private and public keys for verifying / extending JWT tokens (see the [idm][idm] service).

6. Create your `.env` file for your environment. Example:

        PORT=8085
        APP_BASEURL=http://localhost:8085
        JWT_PRIVATE_KEY="<get from IDM service>"
        JWT_PUBLIC_KEY="<get from IDM service>"

7. Run the setup tasks:

        $ npm install

8. Run the server:

        $ npm start

9. Visit the server in your browser:

        $ open http://localhost:8085


## License

See the [LICENSE](./LICENSE) file.


[idm]: https://github.com/LearnersGuild/idm
