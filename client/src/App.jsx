import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Route, Routes, Router } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: { merge: (existing, incoming) => incoming },
        projects: { merge: (existing, incoming) => incoming },
      },
    },
  },
});
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<Project />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
