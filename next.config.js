module.exports = {
  swcMinify: true,
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
