const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsStats = {};
  for (let domain of domains) {
    const splitDomain = domain.split(".").reverse();
    let partsDomain = "";
    for (let part of splitDomain) {
      partsDomain = `${partsDomain}.${part}`;
      if (dnsStats[partsDomain]) {
        dnsStats[partsDomain] += 1;
      } else {
        dnsStats[partsDomain] = 1;
      }
    }
  }
  return dnsStats;
}

module.exports = {
  getDNSStats,
};
