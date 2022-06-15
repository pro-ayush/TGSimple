import sanityClient from "@sanity/client" 

const client = sanityClient({
  projectId: process.env.REACT_APP_PROJECTID,
  dataset: process.env.REACT_APP_DATASET,
  apiVersion: '2022-06-12', // use current UTC date - see "specifying API version"!
  token: process.env.REACT_APP_APIKEY, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true
})

export default client;