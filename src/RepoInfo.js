import React from "react";
const RepoInfo = ({ repo }) => {
  let license;

  switch (repo.licenseInfo?.spdxId) {
    case undefined:
      license = (
        <span
          className="px-1 py-0 ms-1 d-inline-block btn btn-sm btn-danger"
          style={{ fontSize: "0.6em" }}
        >
          NO LICENSE
        </span>
      );
      break;
    case "NOASSERTION":
      license = (
        <span
          className="px-1 py-0 ms-1 d-inline-block btn btn-sm btn-warning"
          style={{ fontSize: "0.6em" }}
        >
          {repo.licenseInfo?.spdxId}
        </span>
      );
      break;
    default:
      license = (
        <span
          className="px-1 py-0 ms-1 d-inline-block btn btn-sm btn-outline-success"
          style={{ fontSize: "0.6em" }}
        >
          {repo.licenseInfo?.spdxId}
        </span>
      );
  }
  return (
    <li className="list-group-item" key={repo.id.toString()}>
      <div className="d-flush justify-content-between align-item-center">
        <div className="d-flex flex-column">
          <a className="h5 mb-0 text-decoration-none" herf={repo.url}>
            {repo.name}
          </a>
          <p className="small">{repo.description}</p>
        </div>
        <div className="text-nowrap ms-3">
          {/* //licenseInfo?. this called optional chaining operator what it does is convert the incoming value and stops the undefined value */}
          {license}
          <span
            className={
              "px-1 py-1 ms-1 d-inline-block btn btn-sm " +
              (repo.viewerSubscription === "SUBSCRIBED"
                ? "btn-success"
                : "btn-outline-secondary")
            }
            style={{ fontSize: "0.6em" }}
          >
            {repo.viewerSubscription}
          </span>
        </div>
      </div>
    </li>
  );
};

export default RepoInfo;
