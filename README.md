# graphiql

GraphQL API Explorer for Learners Guild services.

## Getting Started

Be sure you've read the [instructions for contributing](./CONTRIBUTING.md).

1. Clone the repository.

2. Setup and run [mehserve][mehserve]. Then figure out which port you intend to use and create the mehserve config file:

        $ echo 9002 > ~/.mehserve/graphiql.learnersguild

3. Set your `NODE_ENV` environment variable:

        $ export NODE_ENV=development

4. Get the private and public keys for verifying / extending JWT tokens (see the [idm][idm] service).

5. Create your `.env` file for your environment. Example:

        PORT=9002
        APP_BASEURL=http://graphiql.learnersguild.dev
        IDM_BASE_URL=http://idm.learnersguild.dev
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
