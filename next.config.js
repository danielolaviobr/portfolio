module.exports = {
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["i.scdn.co"],
  },
};
