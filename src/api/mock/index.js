const create = () => {
    // const TIMEOUT = 3000
    const TIMEOUT = 0
  
    return {
        getUser: () => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: require("./getUser.json") })
            }, TIMEOUT)
        }),
        getCampaign: () => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: require("./getCampaign.json") })
            }, TIMEOUT)
        }),
        getCampaignDetail: () => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: require("./getCampaignDetail.json") })
            }, TIMEOUT)
        }),
        getHistory: () => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: require("./getHistory.json") })
            }, TIMEOUT)
        }),
        getDonatur: () => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: require("./getDonatur.json") })
            }, TIMEOUT)
        }),
    }
  }
  
  export default {
    create
  }
  