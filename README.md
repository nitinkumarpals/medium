# Medium Clone 📝

Welcome to the **Medium Clone**! 🚀 This project is a fun exercise in building a blog platform similar to Medium, using a mix of modern technologies. Here's a quick overview of what you can do with it and how it's built. 😄

## Features 🌟

- **Sign Up**: Create a new account and start blogging! 📝
- **Sign In**: Log into your account securely. 🔐
- **View Blogs**: Browse through a list of blog posts in bulk. 📚
- **View Individual Blog**: Read a single blog post in detail. 📖
- **Publish Blog**: Share your thoughts with the world by publishing a new blog. 🌍

## Tech Stack 🚀

- **Frontend**: [React](https://reactjs.org/) 🖥️
- **Backend**: [Cloudflare Workers](https://developers.cloudflare.com/workers/) ☁️
- **Validation**: [Zod](https://github.com/colinhacks/zod) 🔍
- **Language**: [TypeScript](https://www.typescriptlang.org/) 🛠️
- **ORM**: [Prisma](https://www.prisma.io/) with connection pooling 💾
- **Database**: [PostgreSQL](https://www.postgresql.org/) 🗄️
- **Authentication**: [JWT](https://jwt.io/) 🔑

## Getting Started 🚀

1. **Clone the Repo** 🧩

    ```bash
    git clone https://github.com/nitinkumarpals/medium.git
    cd medium
    ```

2. **Install Dependencies** 📦

    ```bash
    npm install
    ```

3. **Set Up Environment Variables** 🔧

    Create a `.env` file in the root directory and add your environment variables:

    ```dotenv
    DATABASE_URL=your_postgres_database_url
    JWT_SECRET=your_jwt_secret
    ```

4. **Run Migrations** 🛠️

    ```bash
    npx prisma migrate dev
    ```

5. **Start the Development Server** 🚀

    ```bash
    npm run dev
    ```

    The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:8787`.

## Contributing 🤝

Feel free to open issues or submit pull requests if you want to contribute. Your feedback and contributions are greatly appreciated! 🙌

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact 📬

For any questions, feel free to reach out to me:

- [GitHub Profile](https://github.com/nitinkumarpals)
- Email: [nitinpal900@gmail.com](mailto:nitinpal900@gmail.com)

Happy coding! 😄👨‍💻👩‍💻

