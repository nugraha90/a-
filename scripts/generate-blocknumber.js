import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import pRetry from "p-retry";
import gitlog from "gitlog";

const gitLog = gitlog.default;

const options = {
  repo: path.resolve(),
  number: 10,
  author: "bl0cknumber",
  fields: ["hash", "abbrevHash", "subject", "authorName", "authorDateRel"],
  execOptions: { maxBuffer: 1000 * 1024 },
};

(async () => {
  async function run() {
    try {
      const commits = gitLog(options);

      const lastCommitMinutes = Number(
        commits[0].authorDateRel.split(" minutes ago")[0]
      );

      if (!isNaN(lastCommitMinutes)) {
        if (lastCommitMinutes < 10) {
          throw new Error("Commit is not longer than 10 minutes!");
        }
      } else {
        throw new Error("Wrong type!");
      }

      const totalBtcBlocksRequest = await fetch(
        "https://api.blockcypher.com/v1/btc/main"
      );
      const totalBtcBlocksResponse = await totalBtcBlocksRequest.json();

      const totalEthBlocksRequest = await fetch(
        "https://api.blockcypher.com/v1/eth/main"
      );
      const totalEthBlocksResponse = await totalEthBlocksRequest.json();

      if (
        !totalEthBlocksResponse.hasOwnProperty("height") ||
        !totalBtcBlocksResponse.hasOwnProperty("height")
      ) {
        throw new Error("height is not found");
      }

      const totalBtcBlocks = totalBtcBlocksResponse.height;
      const totalEthBlocks = totalEthBlocksResponse.height;

      fs.writeFileSync(
        `${path.resolve()}/bl0cknumber.md`,
        `---
layout: page
title: bl0cknumber
permalink: /bl0cknumber/
---

Total BTC Blocks: ${totalBtcBlocks} <br>
Total ETH Blocks: ${totalEthBlocks} 
`
      );
    } catch (e) {
      throw e;
    }
  }

  await pRetry(run, {
    onFailedAttempt: () => {
      console.log("Retrying..");
    },
  });
})();
