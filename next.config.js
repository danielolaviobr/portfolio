module.exports = {
  images: {
    domains: ["i.scdn.co"],
  },
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};
