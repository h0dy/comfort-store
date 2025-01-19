import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <main className="error-container">
      {error.status === 404 ? (
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="error-heading-404">page not found</h1>
          <p className="mt-6 text-lg leading-7">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary capitalize">
              go back home
            </Link>
          </div>
        </div>
      ) : (
        <h4 className="error-heading">There Was An Error</h4>
      )}
    </main>
  );
};

export default Error;
