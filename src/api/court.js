import { localData, cookieData } from "../util/local";
import axios from "../util/axios";

// 修改球场
export function setCourt(param) {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/setCourt", param)
      .then(res => {
        if (res.code == 200) {
          resolve(res);
        } else {
          reject(res);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

// 修改球场
export function delCourt(param) {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/delCourt", param)
        .then(res => {
          if (res.code == 200) {
            resolve(res);
          } else {
            reject(res);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }

// 修改球场
export function newCourt(param) {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/newCourt", param)
        .then(res => {
          if (res.code == 200) {
            resolve(res);
          } else {
            reject(res);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }

export function AllCourt() {
  return new Promise((resolve, reject) => {
    axios
      .get("/api/AllCourt")
      .then(res => {
        if (res.code == 200) {
          resolve(res);
        } else {
          reject(res);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}