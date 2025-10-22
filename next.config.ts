import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";

const nextConfig: NextConfig = {
  // experimental: {
  //   cacheComponents: true,
  // },
};

export default withBotId(nextConfig);
