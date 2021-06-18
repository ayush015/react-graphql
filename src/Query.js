//what I feel is GraphQL make the development on client side faster
//Not worrying about fetching the API and getting response for different endpoints

//@Important
//important point to remember is
//whenever you write any string in 'query'
//make sure it is 100% right
//otherwise you'll(Ayush) just ignore it an waste time while debugging because
//nobody gives any kind of crap about strings

const githubQuery = {
  //this is how we pass query in graphql
  //insted of multiple endpoints for different data
  //we write just a single endpoint and fetch all the data
  //we 'POST' this HTTP request and get response
  query: `
  {
     viewer {
      name
    }
    
    search(query: "user:ayush015 sort:updated-desc", type: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          name
          description
          id
          url
          viewerSubscription
          licenseInfo{
            spdxId
          }
        }
      }
    }
  }
  
  `,
};

export default githubQuery;

//redundant

// const githubQuery = {
//   query: `
//   {
//     viewer {
//       name
//       repositories(first:20){
//         nodes{
//           name
//           description
//           id
//           url
//         }
//       }
//     }
//   }
//   `,
// };
